//Esta App necesita guardar al "hora" final/de destino y calcular cuantos segounds, minutos, horas y dias quedan para entonces
//Esta App necesita dismunir el contador de minutos cuando segundos lleguen a 0, lo mismo con horas y dias


const app = Vue.createApp({
  data() {
      return {
          date: undefined,
          finalDate: undefined,
          timeLeft: undefined,
          seconds: undefined,
          minutes: undefined,
          hours: undefined,
          days: undefined
      }
  },
  created(){
      this.finalDate = new Date("2021-03-30 12:12:12")
      this.date = new Date()
      this.timeLeft = this.finalDate - this.date
      setInterval(
        () => {
            if(this.timeLeft != 0){
                this.timeLeft -= 1000
                }
            this.setFormat(this.timeLeft)

        }, 1000)
  },
  methods:{
    setFormat(timeLeft) {
        this.seconds = Math.floor(timeLeft/1000)

        this.minutes = Math.floor(this.seconds/60)
        this.seconds = (this.seconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2})
       
        this.hours = Math.floor(this.minutes/60)
        this.minutes =  (this.minutes % 60).toLocaleString('en-US', {minimumIntegerDigits: 2})
      
        this.days = Math.floor(this.hours/24).toLocaleString('en-US', {minimumIntegerDigits: 2})
        this.hours = (this.hours % 24).toLocaleString('en-US', {minimumIntegerDigits: 2})

        
    },
    toggleShow(){
        this.mustShow = !this.mustShow
      },
  }
})

app.mount('main')
