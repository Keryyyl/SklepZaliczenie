import Header from "./components/Header"
import KursCard from "./components/KursCard"
import MailForm from "./components/MailForm"

function Koszyk() {

    return (
      <>
      <Header/>
      Koszyk
      <KursCard title="Kurs React" description="Kompleksowy kurs React od podstaw." prices={{ Temporary: 15, Forever: 25, Download: 35 }} 
/>
      <MailForm/>
      </>
    )
  }
  
  export default Koszyk
  