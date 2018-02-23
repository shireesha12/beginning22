/*eslint-env browser*/

function tellFortune(jobTitle, geographicLocation, partnerName, noOfChildren) {
    "use strict";
    window.document.write("You will be a " + jobTitle + " in " + geographicLocation + " , and married to " + partnerName + " with " +  noOfChildren +  " kids." + "<br>");
}
tellFortune("Software Engineer", "QualComm, San Diego", "Shireesha", "2");
tellFortune("Doctor", "Scripss La Jolla", "Irisha", "3");
tellFortune("Web Developer", "Miva, Inc. San Diego, CA", "Pradeep", "2");
tellFortune("Cashier", "Target Mira Mesa", "Bob", "4");