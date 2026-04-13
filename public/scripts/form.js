const url2 = `https://visits-christian-guardias-projects.vercel.app/submit`;

const form = document.getElementById('form');


// function handleClick(e) {
        // e.preventDefault();
    // grecaptcha.enterprise.ready(async () => {
    //   const token = await grecaptcha.enterprise.execute("{{6LfYVykqAAAAAJjjqnWXEWHoYS59zqjiLZB4V0ss}}", {
    //     action: "send_comment",
    //   });
    //   await sendComment({ token });
    //   return true;
    // });

//     return false;
// }

function formSubmit() {

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); 
             
        const formData = new FormData(form);

        if (formData.get('email').length == 0 || formData.get('control').length == 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:darkred;">Field is required.</span>';
            return false;
        } 

          await fetch(url2, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'), 
                control: formData.get('control'),
            }),
          })
          .then((response) => response.text())
          .then((data) => console.log(data))
          .catch((error) => console.error('Error:', error));
       
        alert('Form submitted successfully!');

        window.location.href = "https://compartiendo-sonrisas.desarrolladorweb.blog/";
    });
}

formSubmit();