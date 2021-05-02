	function setmk1()
		{
			var mk=document.getElementById("marks1").value;
			document.getElementById("mk1").innerHTML=mk;
			console.log("mk = "+mk);
			var m1 = $('.sa') ;	var m2 = $('.re') ;	var m3 = $('.ga') ;
			var m4 = $('.ma') ;	var m5 = $('.pa') ;	var m6 = $('.dha') ;	var m7 = $('.ni') ;			
			
			var m11 = $('.sa1') ;	var m12 = $('.re1') ;	var m13 = $('.ga1') ;
			var m14 = $('.ma1') ;	var m15 = $('.pa1') ;	var m16 = $('.dha1') ;	var m17 = $('.ni1') ;			
			
			if(mk=="1")
			{
				m1.removeClass().addClass('progress-bar sa1');		m12.removeClass().addClass('progress-bar re');
				m13.removeClass().addClass('progress-bar ga');		m14.removeClass().addClass('progress-bar ma');
				m15.removeClass().addClass('progress-bar pa');		m16.removeClass().addClass('progress-bar dha');
				m17.removeClass().addClass('progress-bar ni');
			}			
			
			else if(mk=="2")
			{
				m1.removeClass().addClass('progress-bar sa1');		m2.removeClass().addClass('progress-bar re1');
				m13.removeClass().addClass('progress-bar ga');		m14.removeClass().addClass('progress-bar ma');
				m15.removeClass().addClass('progress-bar pa');		m16.removeClass().addClass('progress-bar dha');
				m17.removeClass().addClass('progress-bar ni');
			}
						
			else if(mk=="3")
			{
				m1.removeClass().addClass('progress-bar sa1');		m2.removeClass().addClass('progress-bar re1');
				m3.removeClass().addClass('progress-bar ga1');		m14.removeClass().addClass('progress-bar ma');
				m15.removeClass().addClass('progress-bar pa');		m16.removeClass().addClass('progress-bar dha');
				m17.removeClass().addClass('progress-bar ni');
			}
									
			else if(mk=="4")
			{
				m1.removeClass().addClass('progress-bar sa1');		m2.removeClass().addClass('progress-bar re1');
				m3.removeClass().addClass('progress-bar ga1');		m4.removeClass().addClass('progress-bar ma1');
				m15.removeClass().addClass('progress-bar pa');		m16.removeClass().addClass('progress-bar dha');
				m17.removeClass().addClass('progress-bar ni');
			}			
			
			else if(mk=="5")
			{
				m1.removeClass().addClass('progress-bar sa1');		m2.removeClass().addClass('progress-bar re1');
				m3.removeClass().addClass('progress-bar ga1');		m4.removeClass().addClass('progress-bar ma1');
				m5.removeClass().addClass('progress-bar pa1');		m16.removeClass().addClass('progress-bar dha');
				m17.removeClass().addClass('progress-bar ni');
			}
			
			else if(mk=="6")
			{
				m1.removeClass().addClass('progress-bar sa1');		m2.removeClass().addClass('progress-bar re1');
				m3.removeClass().addClass('progress-bar ga1');		m4.removeClass().addClass('progress-bar ma1');
				m5.removeClass().addClass('progress-bar pa1');		m6.removeClass().addClass('progress-bar dha1');
				m17.removeClass().addClass('progress-bar ni');
			}
			
			else if(mk=="7")
			{
				m1.removeClass().addClass('progress-bar sa1');		m2.removeClass().addClass('progress-bar re1');
				m3.removeClass().addClass('progress-bar ga1');		m4.removeClass().addClass('progress-bar ma1');
				m5.removeClass().addClass('progress-bar pa1');		m6.removeClass().addClass('progress-bar dha1');
				m7.removeClass().addClass('progress-bar ni1');
			}
			
			else if(mk=="0")
			{
				m11.removeClass().addClass('progress-bar sa');		m12.removeClass().addClass('progress-bar re');
				m13.removeClass().addClass('progress-bar ga');		m14.removeClass().addClass('progress-bar ma');
				m15.removeClass().addClass('progress-bar pa');		m16.removeClass().addClass('progress-bar dha');
				m17.removeClass().addClass('progress-bar ni');
			}
			
		}