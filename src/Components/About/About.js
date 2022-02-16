import './About.scss';

const About = () => {
  return (
    <div className="about">
      <h1>Our Team</h1>
      <div className="team-container">
        <div className="frontend-team-container">
          <h2>Frontend</h2>
          <div className="frontend-peeps">
            <div className="regan">
              <h3>Regan Losey</h3>
              <img src="https://ca.slack-edge.com/T029P2S9M-U0263KNDQEN-071208674a7c-512" alt="picture-of-regan"></img>
            </div>
            <div className="delilah">
              <h3>Delilah Rose</h3>
              <img src="https://ca.slack-edge.com/T029P2S9M-U01R59611RS-5676e5935906-512" alt="picture-of-delilah"></img>
            </div>

          </div>
        </div>
        <div className="backend-team-container">
          <h2>Backend</h2>
          <div className="backend-peeps">
            <div className="greg">
              <h3>Greg Fischer</h3>
              <img src="https://ca.slack-edge.com/T029P2S9M-U02233K5486-9aac71cf877a-512" alt="picture-of-greg"></img>
            </div>
            <div className="sam">
              <h3>Sam Devine</h3>
              <img src="https://ca.slack-edge.com/T029P2S9M-U0260JMPGLV-90a3ce454935-512" alt="picture-of-sam"></img>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;