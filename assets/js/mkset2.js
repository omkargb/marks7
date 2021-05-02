	function setmk2()
		{
			var mks=document.getElementById("marks2").value;
			console.log("mks = "+mks);
			document.getElementById("mk2").innerHTML=mks;
						
			var z1 = $('.e1') ;		var z2 = $('.e2') ;		var z3 = $('.e3') ;
			var z4 = $('.e4') ;		var z5 = $('.e5') ;		var z6 = $('.e6') ;		var z7 = $('.e7') ;			
			
			var z11 = $('.e11') ;	var z12 = $('.e12') ;	var z13 = $('.e13') ;
			var z14 = $('.e14') ;	var z15 = $('.e15') ;	var z16 = $('.e16') ;	var z17 = $('.e17') ;			
			
			if(mks=="1")
			{
				z1.removeClass().addClass('progress-bar e11');		z12.removeClass().addClass('progress-bar e2');
				z13.removeClass().addClass('progress-bar e3');		z14.removeClass().addClass('progress-bar e4');
				z15.removeClass().addClass('progress-bar e5');		z16.removeClass().addClass('progress-bar e6');
				z17.removeClass().addClass('progress-bar e7');
			}			
			
			else if(mks=="2")
			{
				z1.removeClass().addClass('progress-bar e11');		z2.removeClass().addClass('progress-bar e12');
				z13.removeClass().addClass('progress-bar e3');		z14.removeClass().addClass('progress-bar e4');
				z15.removeClass().addClass('progress-bar e5');		z16.removeClass().addClass('progress-bar e6');
				z17.removeClass().addClass('progress-bar e7');
			}
						
			else if(mks=="3")
			{
				z1.removeClass().addClass('progress-bar e11');		z2.removeClass().addClass('progress-bar e12');
				z3.removeClass().addClass('progress-bar e13');		z14.removeClass().addClass('progress-bar e4');
				z15.removeClass().addClass('progress-bar e5');		z16.removeClass().addClass('progress-bar e6');
				z17.removeClass().addClass('progress-bar e7');
			}
									
			else if(mks=="4")
			{
				z1.removeClass().addClass('progress-bar e11');		z2.removeClass().addClass('progress-bar e12');
				z3.removeClass().addClass('progress-bar e13');		z4.removeClass().addClass('progress-bar e14');
				z15.removeClass().addClass('progress-bar e5');		z16.removeClass().addClass('progress-bar e6');
				z17.removeClass().addClass('progress-bar e7');
			}			
			
			else if(mks=="5")
			{
				z1.removeClass().addClass('progress-bar e11');		z2.removeClass().addClass('progress-bar e12');
				z3.removeClass().addClass('progress-bar e13');		z4.removeClass().addClass('progress-bar e14');
				z5.removeClass().addClass('progress-bar e15');		z16.removeClass().addClass('progress-bar e6');
				z17.removeClass().addClass('progress-bar e7');
			}
			
			else if(mks=="6")
			{
				z1.removeClass().addClass('progress-bar e11');		z2.removeClass().addClass('progress-bar e12');
				z3.removeClass().addClass('progress-bar e13');		z4.removeClass().addClass('progress-bar e14');
				z5.removeClass().addClass('progress-bar e15');		z6.removeClass().addClass('progress-bar e16');
				z17.removeClass().addClass('progress-bar e7');
			}
			
			else if(mks=="7")
			{
				z1.removeClass().addClass('progress-bar e11');		z2.removeClass().addClass('progress-bar e12');
				z3.removeClass().addClass('progress-bar e13');		z4.removeClass().addClass('progress-bar e14');
				z5.removeClass().addClass('progress-bar e15');		z6.removeClass().addClass('progress-bar e16');
				z7.removeClass().addClass('progress-bar e17');
			}
			
			else if(mks=="0")
			{
				z11.removeClass().addClass('progress-bar e1');		z12.removeClass().addClass('progress-bar e2');
				z13.removeClass().addClass('progress-bar e3');		z14.removeClass().addClass('progress-bar e4');
				z15.removeClass().addClass('progress-bar e5');		z16.removeClass().addClass('progress-bar e6');
				z17.removeClass().addClass('progress-bar e7');
			}
			
		}