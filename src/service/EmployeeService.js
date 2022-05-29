import axios from 'axios';
const BASE_URL = 'http://localhost:8088/employeePayrollService';

class EmployeeService{

    getAllEmployees() {
        return axios.get(`${BASE_URL}/get`);
      }

    addEmployees(data){
      return axios.post(`${BASE_URL}/create`, data)
    }
    deleteEmployee(id) {
        return axios.delete(`${BASE_URL}/delete/${id}`); 
      }
      getEmployee(id) {
        return axios.get(`${BASE_URL}/get/${id}`);
      }

      updateEmployee(id,data) {
        return axios.put(`${BASE_URL}/update/${id}`, data);
      }
}
export default new EmployeeService();