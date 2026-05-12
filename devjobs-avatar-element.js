class DevjobsAvatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    createURL(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }
    

    render(){
        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'midudev';
        const size = this.getAttribute('size') ?? '30';

        const imageURL = this.createURL(service, username);

        console.log(imageURL)

        this.shadowRoot.innerHTML = `
        <style>
        .header-actions-profile-pic{
            width: ${size}px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }
        </style>

        <img 
            class="header-actions-profile-pic" 
            src="${imageURL}" 
            alt="foto de perfil" 
            width="${size}" 
            height="${size}" 
        />
             
        `
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('devjobs-avatar', DevjobsAvatar);



