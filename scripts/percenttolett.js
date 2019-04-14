
function myFunction(){
	var scorez = document.getElementById("percent").value;
	if(scorez >= 98){
		document.getElementById("text").innerHTML = "Your letter grade is an A+.";
	}else
		if(scorez < 98 && scorez >= 93){
			document.getElementById("text").innerHTML = "Your letter grade is an A.";
		}else{
			if(scorez <93 && scorez >=90){
				document.getElementById("text").innerHTML = "Your letter grade is an A-.";
			}else{
				if(scorez <90 && scorez >=87){
					document.getElementById("text").innerHTML = "Your letter grade is a B+.";
				}else{
					if(scorez < 87 && scorez >= 83){
						document.getElementById("text").innerHTML = "Your letter grade is a B.";
					}else{
						if(scorez < 83 && scorez >= 80){
							document.getElementById("text").innerHTML = "Your letter grade is a B-.";
						}else{
							if(scorez < 80 && scorez >= 77){
								document.getElementById("text").innerHTML = "Your letter grade is a C+.";
							}else{
								if(scorez <77&& scorez >=73){
									document.getElementById("text").innerHTML = "Your letter grade is a C.";
								}else{
									if(scorez < 73 && scorez >= 70){
										document.getElementById("text").innerHTML = "Your letter grade is a C-.";
									}else{
										if(scorez <70 &&scorez >= 67){
											document.getElementById("text").innerHTML = "Your letter grade is a D+.";
										}else{
											if(scorez <67 && scorez >= 63){
												document.getElementById("text").innerHTML = "Your letter grade is a D.";
											}else{
												if(scorez <63 && scorez >= 60){
													document.getElementById("text").innerHTML = "Your letter grade is a D-.";
												}else{
													if(scorez < 60){
														document.getElementById("text").innerHTML = "Your letter grade is a F.";
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
}
