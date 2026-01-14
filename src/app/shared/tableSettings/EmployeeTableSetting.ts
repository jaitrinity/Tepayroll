export class EmployeeTableSetting{
    public static setting = {
        mode: 'external',
        hideSubHeader: false,
        actions: {
          position: 'right',
          add: false,
          edit : false,
          delete : false,
          custom: [
            { name: 'editrecord', title: 'Edit'},
            { name: 'getSalaryData', title: 'Salary Data' },
          ],
        },
        pager :{
          perPage : 10
        },
        columns: {
          srNo: {
            title: 'Sr No',
            // sort : false,
          },
          uanNo: {
            title: 'UAN No',
            // sort : false,
          },
          epfNo: {
            title: 'EPF No',
            // sort : false,
          },
          esiNo: {
            title: 'ESI No',
            // sort : false,
            // width : "120px"
          },
          bankName: {
            title: 'Bank Name',
            // sort : false,
          },
          ifscCode: {
            title: 'IFSC Code',
            // sort : false,
          },
          accountNo: {
            title: 'Account No',
            // sort : false,
          },
          catogoryCode: {
            title: 'Catogory Code',
            // sort : false,
          },
          name: {
            title: 'Name of contract Labour',
            // sort : false,
          },
          fatherName: {
            title: 'Father Name',
            // sort : false,
          },
          category: {
            title: 'Category',
            // sort : false,
            // width : "80px"
          },
          deptt: {
            title: 'Deptt',
            // sort : false,
          },
          // dob: {
          //   title: 'DOB',
          //   // sort : false,
          // },
          // doj: {
          //   title: 'DOJ',
          //   // sort : false,
          // },
          // basicWages: {
          //   title: 'Basic Wages',
          //   // sort : false,
          // },
          // hra: {
          //   title: 'HRA',
          //   // sort : false,
          // },
          // conveyance: {
          //   title: 'Conveyance',
          //   // sort : false,
          // },
          // mediAll: {
          //   title: 'Medi. All',
          //   // sort : false,
          // },
          // arries: {
          //   title: 'Arries',
          //   // sort : false,
          // },
          // splAll: {
          //   title: 'Spl. All',
          //   // sort : false,
          // },
        }
    }
}