import CountDown from "./countDown/page";
import Hero from "./hero/page";
import Story from "./story/page";
import Moments from "./moments/page";
import Schedule from "./schedule/page";
import RSVP from "./rsvp/page";

const Page = () => {
  return (
    <>
      <Hero />
      <Story />
      <CountDown />
      <Moments />
      <Schedule />
      <RSVP />
    </>
  )
}

export default Page