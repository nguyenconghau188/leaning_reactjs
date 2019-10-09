import React, {Component} from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container mt-30">
        <div className="row">         
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="text-center">
              <h2>QUẢN LÝ CÔNG VIỆC</h2> <hr/>
            </div>
            
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm công việc</h3>
                </div>
                <div className="panel-body">                 
                  <form action="" method="POST" className="form-group" role="form">
                    <div className="form-group">
                      <label>Tên:</label>
                      <input className="form-control"></input>
                    </div>
                    <div className="form-group">
                      <label>Trạng thái:</label>
                      <select className="form-control">
                        <option value="1">Kích hoạt</option>
                        <option value="0">Ngăn chặn</option>
                      </select>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-warning btn-m2"><i className="fa fa-plus"></i> Lưu lại</button>
                        <button type="submit" className="btn btn-danger btn-m2"><i className="fa fa-times"></i> Hủy bỏ</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-primary"><i className="fa fa-plus"></i> Thêm công việc</button>
              </div> 
              <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button"><i className="fa fa-search"></i> Tìm</button>
                  </span>
                </div>
              </div>
              <div className="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <button className="btn btn-primary" type="button">
                  Sắp xếp <i className="fa fa-list"></i> 
                </button>
              </div>
              <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th className="col-xs-1">STT</th>
                      <th className="col-xs-5">Tên</th>
                      <th className="col-xs-3">Trạng thái</th>
                      <th className="col-xs-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <input type="text" name="name" id="name" className="form-control"/>
                      </td>
                      <td>
                        <select name="status" id="status" className="form-control">
                          <option value="0">Tất cả</option>
                        </select>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        Học Angular 4
                      </td>
                      <td>
                        <span style={{backgroundColor: "red", color: "white", textAlign: "center"}}>Kích hoạt</span>
                      </td>
                      <td>
                        <div className="form-group text-center">
                          <button type="submit" className="btn btn-warning btn-m2">Sửa</button>
                          <button type="submit" className="btn btn-danger btn-m2">Xóa</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
