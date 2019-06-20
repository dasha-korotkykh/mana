import React from "react";
import { SEO, Header, Footer, Case, SlackMessage, FacebookMessage } from "../components";
import invitationCardSrc from "../assets/images/unsorted/invitation-card.png";
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
                <div className="invitation-double">
                  <span>А что если бы</span>
                  <span>спасибо</span>
                  <span>можно было намазать на хлеб?</span>
                </div>
                <img className="invitation-card" src={invitationCardSrc} alt="А что если бы спасибо можно было намазать на хлеб?" />
                <div className="text-center">

                  <div class="avatar-wrapper">
                    <object class="avatar-object" data={dashaKorotkykhRoundedAvatar} role="img" aria-label="Dasha Korotkykh"></object>
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
            <div className="hero hero-lg">
              <div className="hero-body">
                <Case id="case-1" number="1" name={<span>Beautiful eyes <sup style={{ color: "lightgrey" }}><small><em>mediocre tan</em></small></sup></span>} difficulty="Well, it depends." objectives="Compliment appearance — new haircut, tattoo, bracelet, jeans, etc." />
                <SlackMessage
                  senderId="dasha-korotkykh"
                  senderName="Dasha Korotkykh"
                  senderAvatarUrl={dashaKorotkykhAvatar}
                  reactions={[
                    { emoji: "💪", count: 13 },
                    { emoji: "🥇", count: 9 },
                    { emoji: "🎮", count: 7 },
                    { emoji: "💀", count: 12 },
                    { emoji: "😤", count: 11 },
                    { emoji: "🐲", count: 5 }
                  ]}
                  replies={[
                    { name: "Alexandr Tovmach", avatarUrl: irynaShvetsAvatar },
                    { name: "Alyona Rapova", avatarUrl: georgeBarvinokAvatar },
                    { name: "Artem Manukian", avatarUrl: galynaMakogoniukAvatar },
                    { name: "Oleg Chulanovskyi", avatarUrl: orestHapaliakAvatar },
                    { name: "Yuriy Stetsula", avatarUrl: vadymDrybasAvatar },
                    { name: "Andrii Karun", avatarUrl: yuriiOstapchukAvatar },
                    { name: "Denis Beketsky", avatarUrl: bohdanPelekhAvatar }
                  ]}
                >
                  <p>/give +10 @ilya.kotlov & @volodymyr.kondratenko for the deepest and most beautiful eyes I have ever seen #загарніочі.</p>
                </SlackMessage>
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body">Case 2</div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body">Case 3</div>
            </div>
          </article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Index;