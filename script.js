class Slider{
    constructor(){
       this.images=[];
       this.images[0]= "nat1.jpg";
       this.images[1]= "nat2.jpg";
       this.images[2]= "nat3.jpg";

       this.links=[];
       this.links[1]="https://lh3.googleusercontent.com/proxy/oSrIzdiA77-_1Kvr0GDJh4zhrZBQ54NR6fvJp0N64p3T4f2P_tuAaovQuwymphF019dbTIbOcTxHEmkZODWhrKF_a5MFn0aqRg4IaVcnbQ";
       this.links[2]="https://lh3.googleusercontent.com/proxy/6ji72XLOHGpvNxRlaM02IZQ-Tcor5x48JgBkcLwsK4jA2-MOsYcV481IXS74ByIFGoQ-NVzUPwSjdG7VBTS6jfrOD13XRBlv2QiK-kbLMAsZKg";
        this.links[0]="https://lh3.googleusercontent.com/proxy/WpzsyIJrGTG9vyXNfK6opOWdJ1kuHuO5yUoOcCHNq2ZzvFg66495Ppj0W4faAZ6ZxahZSb5zgDKRIaDH2GeBjeCF8iLjkkJ1BZ8BkpP95lMr6nEP";
      
        this.counter = 0;

       this.palyslider();
          setInterval(()=>{
          this.palyslider();
          
         },3000);
    }
    
    palyslider(){
        if(this.counter < (this.images.length) -1){
         this.counter++;

        }

        else{
        this.counter=0;
    }
                
document.slide.src = this.images[this.counter];
document.getElementById("link").href= this.links[this.counter];
    }
    
}
onload = new Slider();
