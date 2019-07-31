<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\RegisterFormRequest;
use Illuminate\Support\Facades\Auth;
use App\User;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function register(RegisterFormRequest $request)
    {
        $params = $request->only('email', 'name', 'password');
        $user = new User;
        $user->name = $params['name'];
        $user->email = $params['email'];
        $user->password = bcrypt($params['password']);
        $user->save();

        return response()->json($user, Response::HTTP_OK);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!($token = JWTAuth::attempt($credentials))) {
            return response()->json([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'message' => 'Invalid Credentials.'
            ], Response::HTTP_BAD_REQUEST);
        }
        return response()->json(['token' => $token], Response::HTTP_OK);
    }

    public function user(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            return response()->json($user, Response::HTTP_OK);
        }
        return response()->json(null, Response::HTTP_BAD_REQUEST);
    }

    public function logout(Request $request)
    {
        $this->validate($request, ['token'=>'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json('You have successed logged out', Response::HTTP_OK);
        } catch (JWTException $e) {
            return response()->json('Log out error.', Response::HTTP_BAD_REQUEST);
        }
    }

    public function refresh()
    {
        return response(JWTAuth::getToken(), Response::HTTP_OK);
    }
}
