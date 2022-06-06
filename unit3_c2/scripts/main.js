const submit = document.querySelector("#submit");
submit.addEventListener("click",submitfunc)

function submitfunc() {
    event.preventDefault()

    let obj = {
        name: formData.name.value,
        email: form.email.value,
        address: form.address.value,
        amount: Number(form.amount.value)
    }
    localStorage.setItem("user",JSON.stringify(obj))

    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#address').value = "";
    document.querySelector('#amount').value = "";

}