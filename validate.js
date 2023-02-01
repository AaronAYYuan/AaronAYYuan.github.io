
      function validate() {
      
         if( document.regForm.msg.value == "" ) {
            alert( "Please provide your user name!" );
            document.regForm.msg.focus() ;
            return false;
         }
         if( document.regForm.fn.value == "" ) {
            alert( "Please provide your first name!" );
            document.regForm.fn.focus() ;
            return false;
         }
		 if( document.regForm.ln.value == "" ) {
            alert( "Please provide your last name!" );
            document.regForm.ln.focus() ;
            return false;
         }
		 if( document.regForm.emailAddr.value == "" ) {
            alert( "Please provide an E-mail address!" );
            document.regForm.emailAddr.focus() ;
            return false;
         }
           
         return( true );
      }
        
