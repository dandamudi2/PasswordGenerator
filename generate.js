const btnGenerate = document.getElementById("btnGenerate");

btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();
  GeneratePwd();
});

function GeneratePwd() {
  const pwdLength = document.getElementById("lblLength").innerHTML;
  let isChecked = false;

  let characters = "";

  if (document.getElementById("chkUpperCase").checked) {
    isChecked = true;
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (document.getElementById("chkLowerCase").checked) {
    isChecked = true;

    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (document.getElementById("chkNumbers").checked) {
    isChecked = true;
    characters += "0123456789";
  }

  if (document.getElementById("chkSymbols").checked) {
    isChecked = true;
    characters += "&$@=*";
  }

  if (isChecked === false) {
    characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }

  var pwd = "";
  if (parseInt(pwdLength) >= 100) {
    alert("Password length exceeding!");
    return;
  }
  document.getElementById("chkUpperCase").checked;
  for (var i = 0; i < parseInt(pwdLength); i++) {
    //if (document.getElementById("chkUpperCase").checked)

    pwd += characters.charAt(Math.random() * characters.length);
  }

  document.getElementById("lblPassword").innerHTML = pwd;
}

document.getElementById("imgCopyToClipBoard").addEventListener("click", () => {
  var lblClipBoard = document.getElementById("pwdCopiedToClipBoard");
  lblClipBoard.innerHTML = "PasswordCopied To ClipBoard!";

  setTimeout(() => {
    lblClipBoard.innerHTML = "";
  }, 2000);
});
