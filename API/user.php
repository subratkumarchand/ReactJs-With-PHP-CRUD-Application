<?php 
 // required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 $con = mysqli_connect("localhost","root","","api");
 
 $request_method = $_SERVER['REQUEST_METHOD'];
  switch($request_method){
    case 'GET':
		getUser();
	    break;
	case 'POST':
        insertUser();
        break;
    case 'PUT':
        updateUser();
        break;
    case 'DELETE':
        deleteUser();
        break;
	case 'OPTIONS':
        //deleteEmployee();
        break;
    default:
        header('HTTP/1.0 405 Method Not Allowed');
        break;
  }
  
  function getUser(){
	  global $con;
	  if($con){
			$sql = "SELECT * FROM user";
			$data = mysqli_query($con,$sql);
			$rows=array();
			while($r=mysqli_fetch_assoc($data)){
		  $rows[]=$r;
		  }
		  echo json_encode($rows,JSON_PRETTY_PRINT);
		 }
  }
 function insertUser(){
    $user = json_decode(file_get_contents("php://input"));
    if(isset($user)){
		 global $con;
		$name = $user->Name;
		$email = $user->Email;
		$password = $user->Password;
		$phone = $user->Phone;
		$picture = $user->Picture;
		if(!empty($name) && !empty($email) && !empty($phone)){
        $query  ="INSERT INTO user(Name, Email, Password, Phone, Picture) VALUES('$name','$email','$password','$phone','$picture')";
        if(mysqli_query($con, $query) or die(mysqli_error($con)) )
        {
            $response=array(
                'status' => 201,
                'status_message' =>'User Added Successfully.',
				'status_name' => $name
            );
        }else
        {
            $response=array(
                'status' => 400,
                'status_message' =>'User insert Failed.'
            );
        }
    }
    else
    {
        $response=array(
            'status' => 400,
            'status_message' =>'Request Body Empty.'
        );
    }
}
    header('Content-Type: application/json');
    echo json_encode($response);
 }
 function deleteUser(){
	  $user = $_GET['id'];
	 if(isset($user)){
		 global $con;
		$id = $user;
	 $sql=mysqli_query($con,"DELETE  FROM user WHERE id='$id' ") or die(mysqli_error($con));
  if($sql){
		$response=array(
            'status' =>202 ,
            'status_message' =>'data deleted.',
			'status_id' => $id
        );
  }else{
	  $response=array(
            'status' =>204 ,
            'status_message' =>'error'
        );
  }
	 }
   header('Content-Type: application/json');
    echo json_encode($response);
 }
 function updateUser(){
    $user = json_decode(file_get_contents("php://input"));
    if(isset($user)){
		 global $con;
		$name = $user->Name;
		$email = $user->Email;
		$password = $user->Password;
		$phone = $user->Phone;
		$picture = $user->Picture;
		$id = $user->Id;
		if(!empty($name) && !empty($email) && !empty($phone)){
        $query  = " UPDATE user SET Name='$name',Email='$email',Password='$password',Phone='$phone',Picture='$picture' WHERE id='$id'";
        if(mysqli_query($con, $query) or die(mysqli_error($con)) )
        {
            $response=array(
                'status' => 201,
                'status_message' =>'User updated Successfully.',
				'status_name' => $name
            );
        }else
        {
            $response=array(
                'status' => 400,
                'status_message' =>'User update Failed.'
            );
        }
    }
    else
    {
        $response=array(
            'status' => 400,
            'status_message' =>'Request Body Empty.'
        );
    }
}
    header('Content-Type: application/json');
    echo json_encode($response);
} 
 
 
 
 
 ?>