
function showFrameListWeb() {
    document.getElementById("idFrame").src ="listReportUp.html";
      document.getElementById("idFrame").style.visibility = "visible";
      document.getElementById("idFrame").width ="98%";
    }
  
  function showFrameAndroid() {
      document.getElementById("idFrame").width ="40%";
    }
  
   function onUpload() {
      document.getElementById("idProgressBar").style.width ="100%";
      document.getElementById("idViews").style.visibility = "visible";
   } 
  
   function showFrameAnalytics() {
    document.getElementById("idFrame").src ="smUp.html";
    document.getElementById("idFrame").style.visibility = "visible";
    document.getElementById("idFrame").width ="98%";
  
   }
    function showFrameWeb() {
      document.getElementById("idFrame").width ="98%";
    }
  
    function showFrameKanban() {
      document.getElementById("idFrame").src ="page.html";
      document.getElementById("idFrame").style.visibility = "visible";
      document.getElementById("idFrame").width ="98%";
    }

    function showFormWeb() {
        document.getElementById("idFrame").src ="formUp.html";
        document.getElementById("idFrame").style.visibility = "visible";
        document.getElementById("idFrame").width ="98%";
      }
    
    function ShowERP() {
      document.getElementById("erp").style.display = "initial";
      document.getElementById("btnAPI").style.display = "initial";
      document.getElementById("btnUpd").style.display = "none";
    }
  
    function ShowAPI() {
      document.getElementById("api").style.visibility = "visible";
    }
  
    function ShowExcel() {
      document.getElementById("erp").style.display = "none";
      document.getElementById("btnAPI").style.display = "none";
      document.getElementById("btnUpd").style.display = "initial";
    }