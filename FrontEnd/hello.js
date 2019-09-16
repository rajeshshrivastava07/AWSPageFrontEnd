$(document).ready(function() {
	//alert("Document Ready");
	//var obj = jQuery.parseJSON( '{ "name": "John" }' );
	//	alert( obj.name === "John" );
    
	/* $.ajax({
        url: "http://rajeshsimplerest-env.dxafyqm3mn.us-east-1.elasticbeanstalk.com/sample?name=JaiShriRam"
    }).then(function(data) {
		responseFromRestApi = data;
		//alert(responseFromRestApi);
		$("#message-id").html(responseFromRestApi.id);
		$("#message-content").html(responseFromRestApi.message);
    });
	*/
	
	
	refreshPrices();
	
			
});

function fetchInfoVendor(vendorName){
	if (vendorName =="Fruit Vendor 1") {
	$.ajax({
        url: "http://app1behindlb.us-east-1.elasticbeanstalk.com/Getfruits?name=" + vendorName
    }).then(function(data) {
		responseFromRestApi1 = data;
		//alert(responseFromRestApi);
	   $("#message1-id").html(responseFromRestApi1.id);
	   $("#message1-content").html(responseFromRestApi1.message);
    });
	}
	else {
		$.ajax({
			url: "http://app2behindlb.us-east-1.elasticbeanstalk.com/Getfruits?name=" +vendorName
		}).then(function(data) {
		responseFromRestApi2 = data;
		//alert(responseFromRestApi);
	   $("#message2-id").html(responseFromRestApi2.id);
	   $("#message2-content").html(responseFromRestApi2.message);
    });
	}
}

function refreshPrices(){
	fetchInfoVendor('Fruit Vendor 1');
	fetchInfoVendor('Fruit Vendor 2');
}

/* ---- To-BE-DELETED ----- Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://simplerestapisapplication-env.bdmn8m68pq.us-east-1.elasticbeanstalk.com/sample?name=Aditya';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
*/