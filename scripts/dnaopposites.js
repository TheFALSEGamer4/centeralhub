function myFunction() {
	var input = document.getElementById("input").value;
	var output = "";
        for (var i = 0; i < input.length; i++) {
            {
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(input.charAt(i)) == 'G'.charCodeAt(0)) {
                    output += "C";
                }
                else {
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(input.charAt(i)) == 'C'.charCodeAt(0)) {
                        output += "G";
                    }
                    else {
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(input.charAt(i)) == 'A'.charCodeAt(0)) {
                            output += "T";
                        }
                        else {
                            if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(input.charAt(i)) == 'T'.charCodeAt(0)) {
                                output += "A";
                            }
                        }
                    }
                }
            }
		}
		document.getElementById("textinput").innerHTML = "Your inputed sequence was: "+input;
		document.getElementById("textoutput").innerHTML = "Yout ouput sequence is: "+output;
}
}
