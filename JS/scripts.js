
uploadPhoto = () => document.getElementById('photo').click()



handleFile = (file) => {
    const sessionStorage = window.sessionStorage
    sessionStorage.setItem('teste' , 'local storage')
    
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      const photoUrl = event.target.result
      document.getElementById('profile-picture').src = photoUrl
    }

    fileReader.readAsDataURL(file)
}

handleCreate = () =>{
    const card = document.getElementById('businessCard');

    console.log('Create')
}

generateQRCode = () =>{
    const linkedinURL = document.getElementById('linkedIn')
    const QRcontainer = document.getElementById('linkedInQR')
    const QRlabel = document.getElementById('label')

    let src = `https://chart.googleapis.com/chart?cht=qr&chl=${linkedinURL.value}&chs=120x120&chld=L|0`

    linkedinURL.classList.add('hide')
    QRcontainer.src = src

    QRlabel.innerHTML = `<i class="linkedIn-label fab fa-linkedin"></i>`
    QRcontainer.classList.add('linkedIn-border')
    QRcontainer.classList.remove('hide')

    
}

handleEditQR = () =>{
    const linkedinURL = document.getElementById("linkedIn")
    const QRcontainer = document.getElementById("linkedInQR")

    QRcontainer.classList.add('hide')
    linkedinURL.classList.remove('hide')
}







