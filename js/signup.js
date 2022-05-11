const submit = () => {
  const input_id = document.getElementById("inputId").value;
  const result_id = document.getElementById("id-result");

  const input_pw = document.getElementById("inputPw").value;
  const result_pw = document.getElementById("pw-result");

  const check_pw = document.getElementById("inputPwCheck").value;
  const result_check_pw = document.getElementById("pw-check-result");

  const input_name = document.getElementById("inputName").value;
  const result_name = document.getElementById("name-result");

  const input_email = document.getElementById("inputEmail").value;
  const result_email = document.getElementById("email-result");

  if (input_id == '') {
    result_id.innerHTML = "필수 입력 항목입니다.";
    result_id.style.color = "#aa3636";
    result_id.focus();
    return false;
  }
  if (input_pw == '') {
    result_pw.innerHTML = "필수 입력 항목입니다.";
    result_pw.style.color = "#aa3636";
    return false;
  }
  if (check_pw == '') {
    result_check_pw.innerHTML = "필수 입력 항목입니다.";
    result_check_pw.style.color = "#aa3636";
    return false;
  }
  if (input_name == '') {
    result_name.innerHTML = "필수 입력 항목입니다.";
    result_name.style.color = "#aa3636";
    return false;
  }
  if (input_email == '') {
    result_email.innerHTML = "필수 입력 항목입니다.";
    result_email.style.color = "#aa3636";
    return false;
  }
}