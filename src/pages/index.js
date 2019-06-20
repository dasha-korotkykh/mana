import React from "react";
import { SEO, Header, Footer, Case, Caption, SlackMessage, FacebookMessage, CannotEatThankYouWithBread } from "../components";
import {
  youAvatar,
  alecMarinAvatar,
  andriiSirakAvatar,
  bogdanShamanovskyiAvatar,
  bohdanPelekhAvatar,
  dashaKorotkykhAvatar,
  galynaMakogoniukAvatar,
  georgeBarvinokAvatar,
  igorGerasimowAvatar,
  ihorBaranovskyiAvatar,
  ilyaKotlovAvatar,
  irynaShvetsAvatar,
  irynaSteshytsAvatar,
  jeffreyRickerAvatar,
  juliaTitovaAvatar,
  kostiantynKravtsovAvatar,
  kostyaLukyanenkoAvatar,
  orestHapaliakAvatar,
  paulLymanAvatar,
  sergeyBorysenkoAvatar,
  tarasPetryshakAvatar,
  vadymDrybasAvatar,
  vasylMagoraAvatar,
  vitaliyBoyarskyAvatar,
  volodymyrKondratenkoAvatar,
  volodymyrTysjakAvatar,
  yuriiOstapchukAvatar
} from "../assets/images/avatars/slack-squared";
import {
  juliaTitovaAvatar as juliaTitovaRoundedAvatar,
  dashaKorotkykhAvatar as dashaKorotkykhRoundedAvatar
} from "../assets/images/avatars/intro-rounded";
import "./index.scss";

const Index = () => (
  <>
    <SEO description="Hi" keywords={[]} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article className="content">
            <div className="hero">
              <div className="hero-body">
                <div className="text-center">
                  <h1 className="title">
                    <span className="what-if">А что если бы</span>
                    <span className="thank-you">спасибо</span>
                    <span className="could-be-eaten-with-bread">можно было намазать на хлеб?<sup className="text-gray"><strong>*</strong></sup></span>
                  </h1>
                  <h5 className="text-gray"><sup><strong style={{ fontSize: "1.5em", lineHeight: 0.5 }}>*</strong></sup>Russian saying <strong><CannotEatThankYouWithBread /></strong> means <strong>"You cannot eat "thank you" with bread"</strong> or <strong>"Can't put thanks in your pocket (or in the bank)"</strong>. So... <em>what if you could?</em></h5>
                </div>
              </div>
            </div>
            <div className="hero">
              <div className="hero-body">
                <div>
                  <div class="avatar-wrapper">
                    <object class="avatar-object" data={juliaTitovaRoundedAvatar} role="img" aria-label="Dasha Korotkykh"></object>
                  </div>
                  <FacebookMessage>
                    <strong>— Hey</strong>, <span style={{ fontWeight: 600 }}>привіт</span>, привет <span className="waving-hand">👋</span>! Welcome!
                    <br />
                    The reason of you getting here is to hear that you are is <strong>awesome and incredible</strong> and we just really want you not only to know it but <strong>truly feel it</strong> as well.
                  </FacebookMessage>
                    <div>
                      Basically, that’s it <em>(yes, you can leave)</em>, but then wouldn’t it be nice to somehow keep telling it (and cheering each other up) beyond once-in-some-time gathering? 
                    </div>
                    <div>
                      We gave it a thought and sought the aid of bonus.ly, a platform designed and used to exchange gratitude with virtual currency, which at any point could be exchanged for perks of one’s choice.
                    </div>
                </div>
                <br />
                <div className="columns">
                  <div className="column col-4">
                    <div class="panel">
                      <div class="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong><span role="img" aria-label="rainbow">😤</span>Promote your mission</strong>
                            <span className="text-gray"><small>#1</small></span>
                          </h6>
                        </div>
                      </div>
                      <div class="panel-body">
                        Make recognition more impactful by connecting it to your company’s core values and giving visibility to everyone’s contributions.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div class="panel">
                      <div class="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong><span role="img" aria-label="rainbow">💩</span>Build stronger teams</strong>
                            <span className="text-gray"><small>#2</small></span>
                          </h6>
                        </div>
                      </div>
                      <div class="panel-body">
                        Build a scalable culture of recognition by empowering everyone to recognize their peers, direct reports, and managers.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div class="panel">
                      <div class="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong><span role="img" aria-label="rainbow">🚣‍</span>Boost engagement</strong>
                            <span className="text-gray"><small>#3</small></span>
                          </h6>
                        </div>
                      </div>
                      <div class="panel-body">
                        Encourage frequent and timely recognition by integrating with the communication tools your employees use every day.
                      </div>
                    </div>
                  </div>
                </div>
                <div>Their website says many companies are happy using it, that’s a good thing.
                  On the other hand, here at RLR we already have a pretty cool, engaged and coordinated team, is there any actual fun in integrating something like that?
                </div>
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body text-center">
                <div>Let's talk a little bit about</div>
                <h1>How to give a great bonus<sup><span style={{ fontSize: "0.5em", fontWeight: 700, zIndex: 1 }}><a href="https://help.bonus.ly/articles/1165561-how-to-give-a-great-bonus">[1]</a></span></sup> at Ricker Lyman Robotic</h1>
                </div>
            </div>
            <Case>
              <Caption id="case-1" number="1" name={<span>Beautiful eyes <sup style={{ color: "lightgrey" }}><small><em>mediocre tan</em></small></sup></span>} difficulty="Well, it depends." objectives="Compliment appearance — new haircut, tattoo, bracelet, jeans, etc." />
              <SlackMessage
                senderId="dasha-korotkykh"
                senderName="Dasha Korotkykh"
                senderAvatarUrl={dashaKorotkykhAvatar}
                reactions={[
                  { emoji: "😊", count: 13 },
                  { emoji: "🤗", count: 9 },
                  { emoji: "🤭", count: 7 },
                  { emoji: "👀", count: 12 },
                  { emoji: "🔥", count: 11 },
                  { emoji: "😛", count: 5 }
                ]}
                replies={[
                  { name: "Iryna Shvets", avatarUrl: irynaShvetsAvatar },
                  { name: "George Barvinok", avatarUrl: georgeBarvinokAvatar },
                  { name: "Galyna Makogoniuk", avatarUrl: galynaMakogoniukAvatar },
                  { name: "Orest Hapaliak", avatarUrl: orestHapaliakAvatar },
                  { name: "Vadym Drybas", avatarUrl: vadymDrybasAvatar },
                  { name: "Yurii Ostapchuk", avatarUrl: yuriiOstapchukAvatar },
                  { name: "Bohdan Pelekh", avatarUrl: bohdanPelekhAvatar }
                ]}
              >
                <div><strong>/give +10</strong> <span className="bg-secondary">@ilya.kotlov</span> & <span className="bg-secondary">@volodymyr.kondratenko</span> for the deepest and most beautiful eyes I have ever seen in my entire life, no kidding <span className="text-primary"><strong>#загарніочі</strong></span> <span className="text-primary"><strong>#загарнеочень</strong></span></div>
              </SlackMessage>
            </Case>
          </article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Index;