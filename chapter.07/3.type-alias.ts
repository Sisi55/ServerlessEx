type UNIQID = string | null
function getUserID(id: UNIQID) {
  console.log(id)
}
getUserID('aiejfu3-345asd')
getUserID(null)
// getUserID(12); // error TS2345: Argument of type '12' is not assignable to parameter of type 'string'. 

type USER_TYPE = 'TESTER' | 'ADMIN'

let userType: USER_TYPE = 'TESTER'
// userType = 'asdf' // error TS2322: Type '"asdf"' is not assignable to type 'USER_TYPE'.