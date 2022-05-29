<template>
<body>
 <header class="header-content header">
    <div class="logo-content">
          <router-link to="/"><img class="logo-content-img" src="../assets/user_employee1.png" alt="" width="40" height="40" /></router-link>
        <div>
            <span class="emp-text">EMPLOYEE</span><br />
            <span class="emp-text emp-payroll">PAYROLL</span>
        </div>
    </div>
</header>

            
<div id="formId" class="form-content">
    <form class="form" action="#" @submit="submitForm" >
        
        <div class="form-head"> Update Employee Payroll Form</div>

        <div class="row-content">
            <label class="label text" for="name">Name</label>
            <input class="input" type="text" id="name" name="name" placeholder="Your name.."  v-model="formValues.name" required />
           
        </div>

       
        <div class="row-content">
            <label class="label text" for="profile">Profile image</label>
            <div class="profile-radio-content">
                <label>
                    <input type="radio" id="profile1" name="profile" value="../assets/Eclipse-1.1.png" v-model="formValues.profilePic" required>
                    <img class="profile" id="image1" src="../assets/Eclipse-1.1.png" alt="#">
                </label>
                <label>
                    <input type="radio" id="profile2" name="profile" value="../assets/Eclipse-2.1.png" v-model="formValues.profilePic" required>
                    <img class="profile" id="image2" src="../assets/Eclipse-2.1.png" alt="#">
                </label>
                <label>
                    <input type="radio" id="profile3" name="profile" value="../assets/Eclipse-3.1.png" v-model="formValues.profilePic"  required>
                    <img class="profile" id="image3" src="../assets/Eclipse-3.1.png" alt="#">
                </label>
                <label>
                    <input type="radio" id="profile4" name="profile" value="../assets/Eclipse-4.1.png" v-model="formValues.profilePic" required>
                    <img class="profile" id="image4" src="../assets/Eclipse-4.1.png" alt="#">
                </label>
            </div>
        </div>

       
        <div class="row-content">
            <label class="label text" for="gender">Gender</label>
            <div>
                <input type="radio" id="male" name="gender" value="male" v-model="formValues.gender">
                <label class="text" for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" v-model="formValues.gender">
                <label class="text" for="female">Female</label>
            </div>
        </div>

        <div class="row-content">
            <label class="label text" for="department">Department</label>
            <div>
                <input class="checkbox" type="checkbox" id="hr" name="hr" value="HR" v-model="formValues.departments">
                <label class="text" for="hr">HR</label>
                <input class="checkbox" type="checkbox" id="sales" name="sales" value="Sales" v-model="formValues.departments">
                <label class="text" for="sales">Sales</label>
                <input class="checkbox" type="checkbox" id="finance" name="finance" value="Finance" v-model="formValues.departments">
                <label class="text" for="finance">Finance</label>
                <input class="checkbox" type="checkbox" id="engineer" name="engineer" value="Engineer" v-model="formValues.departments">
                <label class="text" for="Engineer">Engineer</label>
                <input class="checkbox" type="checkbox" id="others" name="others" value="Others" v-model="formValues.departments">
                <label class="text" for="others">Others</label>
            </div>
        </div>

       <div className="row-content">
                        <label className="label text" htmlFor="salary">Salary</label>
                        <input className="input" type="text" id="salary" placeholder="Enter your salary" name="salary" v-model="formValues.salary" />
                       
                    </div>

        <div class="row-content">
            <label class="text" for="startDate">Start Date</label>
            <div>
                <select name="Day" id="day" v-model="formValues.day">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>

                <select name="Month" id="month" v-model="formValues.month">
                    <option value="Jan">January</option>
                    <option value="Feb">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="Aug">August</option>
                    <option value="Sept">September</option>
                    <option value="Oct">october</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                </select>

                <select name="Year" id="year" v-model="formValues.year">
                    <option value="2020">2022</option>
                    <option value="2020">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select>
            </div>
        </div>

      
        <div class="row-content">
            <label class="label text" for="notes">Notes</label>
            <textarea id="notes" class="input" name="Notes" placeholder="add notes...."
                style="height: 100px;" v-model="formValues.note"></textarea>
        </div>
        <div class="buttonParent">
           <router-link to="/"> <button type="submit" class="resetButton button cancelButton">Cancel</button></router-link>
            <div class="submit-reset">
                <button type="submit" class="button submitButton" id="submitButton">Update</button>
                <button type="reset" class="button resetButton" id="resetButton">Reset</button>
            </div>
        </div>

    </form>
</div>
</body>
</template>

<script>
import EmployeeService from "../service/EmployeeService";

export default {
    name: 'EditForm',
    data(){
        return{
            formValues:{
                id:'',
                name:'',
                profilePic:'',
                gender:'',
                departments:[],
                salary:'',
                day:'',
                month:'',
                year:'',
                 note:'',
                 startDate:''
            }
        }
    },
    methods: {
    submitForm(event){
        event.preventDefault()
        this.formValues.startDate= this.formValues.day+ this.formValues.month+ this.formValues.year;
        console.log(this.formValues)
         const data=this.formValues;
          EmployeeService.updateEmployee(this.formValues.id,data).then((response) => {
              console.log(response);
                this.employees = response.data.data;  
                alert("Employee Data update successfully!!",response) 
            })
             .catch(error => {
                console.log(error);
                  alert("WARNING!! Error while updating the Employee data!");
              })
        },
         getDataById(id){
             console.log(id)
            EmployeeService
            .getEmployee(id)
            .then((response) => {
                console.log(response.data.data)
                let obj = response.data.data;
                this.setData(obj);
            })
            .catch((err) => {
               console.log(err);
            });
         },
        setData(obj){
            console.log(obj);
            let array=obj.startDate;
            console.log(array);
                this.formValues.id= obj.id;
                this.formValues.name= obj.name;
                this.formValues.departments= obj.departments;
                this.formValues.day=array[0]+array[1];
                this.formValues.month=array[2]+array[3]+array[4];
                this.formValues.year=array[5]+array[6]+array[7]+array[8];
                this.formValues.note= obj.note;
                this.formValues.gender=obj.gender;
                this.formValues.salary=obj.salary;
                console.log(this.formValues);
        },
    },
    created() {
        this.getDataById(this.$route.params.id);
    }
    }

</script>
<style>
body {
    margin: 0;
    height: 100%;
}

.header {
    padding: 15px 0;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content-img {
    border: solid 0px #42515f;
}

.emp-text {
    font: normal normal bold 20px/25px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

* {
    box-sizing: border-box;
}


.form-content {
    min-height: calc(100%-80px);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form {

    width: 65%;
    padding: 44px 60px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 0px solid #f5f5f5;
    border-radius: 8px;
    opacity: 1;


}

.form-head {
    font: normal normal bold 24px/37px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;

}

.label {
    min-width: 140px;
}

label {
    padding: 12px 12px 12px 0;
    display: inline-block;
}

error-output{
    margin-left:10px;
    font-size: 12px;
    font-style: italic;
    color: red;
    font: bold;

}

.text {
    font-size: 16px;
    color: #42515f;
    opacity: 1;
    font-family: Roboto;
}

.input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border: radius 4px;
    resize: vertical;
}


.profile-radio-content {
    display: flex;
    flex-direction: row;
}

.profile-radio-content>label {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 12px;
}


select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    letter-spacing: 0px;
    font: normal normal normal 16px Roboto;
    color: #42515f;
    background-color: transparent;
}

.buttonParent{
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
}

.button{
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: #e2e2e2;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #707070;
    cursor: pointer;
}

.submitButton{
    border: none;
    margin-right: 10px;
    border: 1px solid #707070;
    margin-left: 15px;
}

.cancelButton{
    text-decoration: none;
    text-align: center;
}
</style>