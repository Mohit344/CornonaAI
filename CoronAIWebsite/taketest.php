<?php  
 $connect = mysqli_connect("localhost", "root", "", "coronaidb");  

 if(isset($_POST["insert"]))  
 {  
   $name = $_POST['username'];
   $age = $_POST['age'];
   $sex = $_POST['sex'];
   $email = $_POST['email'];
   $location = $_POST['location'];
   $temperature = $_POST['temperature'];
   $file = addslashes(file_get_contents($_FILES["image"]["tmp_name"])); 

	 
	 
      $query = "INSERT INTO patient(name,age,sex,email,location,temperature,xray1) VALUES ('$name','$age','$sex','$email','$location','$temperature','$file')";  
      if(mysqli_query($connect, $query))  
      {  
      
         
         $command = escapeshellcmd('python3 /CoivdPython/predictor.py');
         $output = shell_exec($command);
         echo $output;
    
        echo '<script type="text/javascript">alert("'.$output.'");</script>';
      }  
	  header("refresh:0; url=result.php");
 } 


 ?>  

 
 <script>  
 $(document).ready(function(){  
      $('#insert').click(function(){  
           var image_name = $('#image').val();  
           if(image_name == '')  
           {  
                alert("Please Select Image");  
                return false;  
           }  
           else  
           {  
                var extension = $('#image').val().split('.').pop().toLowerCase();  
                if(jQuery.inArray(extension, ['gif','png','jpg','jpeg']) == -1)  
                {  
                     alert('Invalid Image File');  
                     $('#image').val('');  
                     return false;  
                }  
           }  
      });  
 });  
 </script>  
 
 



















<!DOCTYPE html>
<html lang="en">
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>CoronAI</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" href="css/style.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- fevicon -->
      <link rel="icon" href="images/fevicon.png" type="image/gif" />
      <!-- Scrollbar Custom CSS -->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
       <link rel="stylesheet" href="css/owl.carousel.min.css"> 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
      <link rel="stylesheet" href="https://rawgit.com/LeshikJanz/libraries/master/Bootstrap/baguetteBox.min.css">
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
      <!--[if lt IE 9]>

      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
   <style>
      .testbox {
         display: flex;
         justify-content: center;
         align-items: center;
         height: inherit;
         padding: 20px;
         }
         form {
         width: 100%;
         padding: 20px;
         border-radius: 6px;
         background: #fff;
         box-shadow: 0 0 1px 0  ;
         }
         .banner {
         position: relative;
         height: 320px;
         background-image: url("images/form-banner.png");  
         background-size: cover;
         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
         }
         .banner::after {
         content: "";
         background-color: rgba(0, 0, 0, 0.4);
         position: absolute;
         width: 100%;
         height: 100%;
         }
         input {
         margin-bottom: 10px;
         border: 1px solid #ccc;
         border-radius: 3px;
         }
         input {
         width: calc(100% - 10px);
         padding: 5px;
         }
         input[type="date"] {
         padding: 4px 5px;
         }
         .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {
         color:#004d00;
         }
         .item input:hover {
         border: 1px solid transparent;
         box-shadow: 0 0 6px 0 red;
         color:#004d00;
         }
         .item {
         position: relative;
         margin: 10px 0;
         }
         .item span {
         color: red;
         }
         input[type="date"]::-webkit-inner-spin-button {
         display: none;
         }
         .item i, input[type="date"]::-webkit-calendar-picker-indicator {
         position: absolute;
         font-size: 20px;
         }
         .item i {
         right: 2%;
         top: 30px;
         z-index: 1;
         }
         [type="date"]::-webkit-calendar-picker-indicator {
         right: 1%;
         z-index: 2;
         opacity: 0;
         cursor: pointer;
         }
         .question span {
         margin-left: 30px;
         }
         .btn-block {
         margin-top: 10px;
         text-align: center;
         }
         button {
         width: 150px;
         padding: 10px;
         border: none;
         border-radius: 5px;
         background: red;
         font-size: 16px;
         color: #fff;
         cursor: pointer;
         }
         button:hover {
         background: black;
         }
         @media (min-width: 568px) {
         .name-item, .city-item {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         }
         .name-item input, .city-item input,.name-item div {
         width: calc(50% - 20px);
         }
         .name-item div input {
         width:97%;}
         .name-item div label {
         display:block;
         padding-bottom:5px;
         }
         }
      </style>
   </head>
   <!-- body -->
   <body class="main-layout inner_page">
      <!-- loader  -->
      <div class="loader_bg">
         <div class="loader"><img src="images/loading.gif" alt="#"/></div>
      </div>
      <!-- end loader -->
      <!-- top -->
                   <!-- header -->
           <header class="header-area">
            
            <div class="container">
               <div class="row d_flex">
                  <div class="col-sm-3 logo_sm">
                     <div class="logo">
                        <a href="index.html"></a>
                     </div>
                  </div>
                  <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
                     <div class="navbar-area">
                        <nav class="site-navbar">
                           <ul>
                              <li></li><li></li>
                              <li><a  href="index.html">Home</a></li>
                              
                              <li><a href="action.html">Take test</a></li>
                              
                              <!--li><a href="action.html">take action</a></li -->
                              <li><a href="index.html" class="logo_midle">CoronAI</a></li>
                              <li><a href="index.html#map">World map</a></li>
                           <!--   <li><a href="doctores.html">doctores</a></li> -->
                              <li><a href="about.html">About us </a></li>
                              <li></li>
                           </ul>
                           <button class="nav-toggler">
                           <span></span>
                           </button>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      <!-- end header -->
  
    <div class="testbox">
       <form method="post" enctype="multipart/form-data">  
        <div class="banner">
          <h1></h1>
        </div>
        <div class="item">
          <label for="name">Name<span>*</span></label>
          <div class="name-item">
            <input id="username" type="text" name="username" placeholder="Name" required/>
          <!-- <input id="name" type="text" name="name" placeholder="Last" required/> -->
          </div>
        </div>
        <div class="item">
          <div class="name-item">
            <div>
              <label for="address">Age<span>*</span></label>
              <input id="age" type="text" name="age" required/>
            </div>
            <div>
              <label for="number">Sex<span>*</span></label>
              <input id="sex" type="tel" name="sex" />
            </div>
          </div>
        </div>
        <div class="item">
          <div class="name-item">
            <div>
              <label for="address">Email Address<span>*</span></label>
              <input id="address" type="text" name="email" required/>
            </div>
			
            <div>
              <label for="number">Location</label>
              <input id="number" type="text" name="location" />
            </div>
          </div>
        </div>
        
        <div class="item">
          <label for="apply">Body Temperature<span>*</span></label>
          <input id="apply" type="text" name="temperature"/>
        </div>
       
        <div class="item">
          <label for="cover">Xray 1<span>*</span></label>
        
		   <input type="file" name="image" id="image" />  
        </div>
		<!--
        <div class="item">
          <label for="picture">Xray 2</label>
          <input id="picture" type="file"/>
        </div>
        -->
        <div class="btn-block">
          <input type="submit" name="insert" id="insert" value="Insert" class="btn btn-info" />  
        </div>
      </form>
    </div><br><br><br><br><br><br><br>
      <!--  footer -->
      <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                        <div class="col-lg-2 col-md-6 col-sm-6">
                           <div class="hedingh3 text_align_left">
                              <h3>Resources</h3>
                              <ul class="menu_footer">
                                 <li><a href="index.html">Home</a><li>
                                 <li><a href="javascript:void(0)">What we do</a><li>
                                 <li> <a href="javascript:void(0)">Media</a><li>
                                 <li> <a href="javascript:void(0)">Travel Advice</a><li>
                                 <li><a href="javascript:void(0)">Protection</a><li>
                                 <li><a href="javascript:void(0)">Care</a><li>
                              </ul>
                             
           
                           </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                           <div class="hedingh3 text_align_left">
                             <h3>About</h3>
                              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various</p>
                           </div>
                        </div>
                     
                
                       
                        <div class="col-lg-3 col-md-6 col-sm-6">
                           <div class="hedingh3  text_align_left">
                              <h3>Contact  Us</h3>
                                <ul class="top_infomation">
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i>
                           Making this the first true  
                        </li>
                        <li><i class="fa fa-phone" aria-hidden="true"></i>
                           Call : +01 1234567890
                        </li>
                        <li><i class="fa fa-envelope" aria-hidden="true"></i>
                           <a href="Javascript:void(0)">Email : demo@gmail.com</a>
                        </li>
                     </ul>
                            
                           
                     </div>
                  </div>
                     <div class="col-lg-4 col-md-6 col-sm-6">
                           <div class="hedingh3 text_align_left">
                              <h3>countrys</h3>
                              <div class="map">
                                <img src="images/map.png" alt="#"/>
                              </div>
                           </div>
                        </div>
                    
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-8 offset-md-2">
                        <p>© 2020 All Rights Reserved. Design by <a href="https://html.design/"> Free html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>     
      <!-- end footer -->
      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/custom.js"></script>
   </body>
</html>