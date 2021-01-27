//Esta App necesita guardar al "hora" final/de destino y calcular cuantos segounds, minutos, horas y dias quedan para entonces
//Esta App necesita dismunir el contador de minutos cuando segundos lleguen a 0, lo mismo con horas y dias


const app = Vue.createApp({
  data() {
      return {
          date: undefined,
          finalDate: undefined,
          timeLeft: undefined,
          mustShow: false,
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1
      }
  },
  methods:{
    setFormat(timeLeft) {
        this.seconds = Math.floor(timeLeft/1000)

        this.minutes = Math.floor(this.seconds/60)
        this.seconds = this.seconds % 60

        
        this.hours = Math.floor(this.minutes/60)
        this.minutes =  this.minutes % 60

        
        this.days = Math.floor(this.hours/24)
        this.hours = this.hours % 24

        console.log("seconds =", this.seconds)
        console.log("minuts=", this.minutes)
        console.log("hours=", this.hours)
        console.log("days=", this.days)
        
    },
    toggleShow(){
        this.mustShow = !this.mustShow
        this.date = new Date()
        this.finalDate = new Date("2021-01-30 12:12:12");
        this.timeLeft = this.finalDate - this.date
        console.log(this.timeLeft)

        setInterval(
            () => {
                if(this.timeLeft != 0){
                    this.timeLeft -= 1000
                    }
                this.setFormat(this.timeLeft)

            }, 1000)
      },
  }
})

app.mount('main')
