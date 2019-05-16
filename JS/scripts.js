
uploadPhoto = () => document.getElementById('photo').click()

window.onload = () =>{

    const container = document.getElementById('emojiFace')
    const emojiList = ['🐯','🐼', '🐶', '🦊', '🦁' , '🐱' , '🐹', '🐰', '🐻', '🐨']
    
    const indexRand = Math.floor(Math.random() * emojiList.length)
    console.log(emojiList[indexRand])
    container.innerHTML = emojiList[indexRand]
}

handleFile = (file) => {
    
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      const photoUrl = event.target.result
      document.getElementById('default-picture').classList.add('hide')
      document.getElementById('profile-picture').src = photoUrl
    }

    fileReader.readAsDataURL(file)
}

handleCreate = () =>{

    const card = document.getElementById('businessCard')
    const doDownload = document.getElementById('link')


    html2canvas(card, {
        backgroundColor: null,
        useCORS : true,
    }).then(canvas => {
        const image = canvas.toDataURL('image/png')
        doDownload.download= 'myAwesomeCard'
        doDownload.href = image
        doDownload.click()
    });

}

generateQRCode = () =>{

    const inputURL = document.getElementById('linkedIn')
    const QRcontainer = document.getElementById('linkedInQR')
    const QRlabel = document.getElementById('label')
    let icon = ''
    let label = ''
    let border = ''

    let src = `https://chart.googleapis.com/chart?cht=qr&chl=${inputURL.value}&chs=120x120&chld=L|0`
    inputURL.classList.add('hide')
    QRcontainer.src = src

    if(inputURL.value.search('linkedin') != -1){
        label = 'linkedIn-label'
        border = 'linkedIn-border'
        icon = 'fab fa-linkedin'

    } else if (inputURL.value.search('github') != -1){
        label = 'github-label'
        border = 'github-border'
        icon = 'fab fa-github' 
    } 
    
    QRlabel.innerHTML = `<i class="${label} ${icon}"></i>`
    QRcontainer.classList.add(border)
    QRlabel.classList.remove('hide')
    QRcontainer.classList.remove('hide')
    
}

handleEditQR = () =>{
    
    const linkedinURL = document.getElementById("linkedIn")
    const QRcontainer = document.getElementById("linkedInQR")
    const QRlabel = document.getElementById('label')

    QRlabel.classList.add('hide')
    QRcontainer.classList.add('hide')
    QRcontainer.classList.remove('github-border', 'linkedIn-border')
    linkedinURL.classList.remove('hide')
    linkedinURL.focus()

}







