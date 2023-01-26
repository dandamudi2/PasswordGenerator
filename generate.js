const btnGenerate = document.getElementById('btnGenerate');

btnGenerate.addEventListener('click', function (e) {

    e.preventDefault();
    GeneratePwd();
   

})

function GeneratePwd(){
    const pwdLength = document.getElementById('txtPwdLength').value;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var pwd ='';
    if(parseInt(pwdLength)>=100)
    {
        alert('Password length exceeding!');
        return;
    }
    for(var i=0;i< parseInt(pwdLength);i++)
    {
        pwd += characters.charAt(Math.random() * characters.length);
    }

    document.getElementById('lblPassword').innerHTML = pwd;
}

