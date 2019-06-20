import React from "react";
import { SEO, Header, Footer, Case, Caption, SlackMessage, FacebookMessage } from "../components";
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
                <div className="invitation-double">
                  <span>А что если бы</span>
                  <span>спасибо</span>
                  <span>можно было намазать на хлеб?</span>
                </div>
                <img className="invitation-card" src={invitationCardSrc} alt="А что если бы спасибо можно было намазать на хлеб?" />
                <div className="text-center">
                  <div><strong>— Hey</strong>, <span style={{ fontWeight: 600 }}>привіт</span>, привет <span className="waving-hand">👋</span>! Welcome!</div>
                  <div>Starting July 1st 2019 we're launching a new recognition and rewards initiative codenamed "Mana" that's based on Bonusly.</div>
                  <div>With Bonusly, everyone in your organization can publicly recognize everyone else by giving small bonuses that add up to meaningful rewards.</div>
                </div>
                <div>
                  <div class="avatar-wrapper">
                    <object class="avatar-object" data={juliaTitovaRoundedAvatar} role="img" aria-label="Dasha Korotkykh"></object>
                  </div>
                  <FacebookMessage>
                    <strong>— Hey</strong>, <span style={{ fontWeight: 600 }}>привіт</span>, привет <span className="waving-hand">👋</span>! Starting July 1st 2019 we're launching a new recognition and rewards initiative codenamed "Mana" that's based on Bonusly.
With Bonusly, everyone in your organization can publicly recognize everyone else by giving small bonuses that add up to meaningful rewards.
                  </FacebookMessage>
                </div>
                <br />
                <div className="columns">
                  <div className="column col-4">
                    <div class="panel">
                      <div class="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong><span role="img" aria-label="rainbow">💩</span>Promote your mission</strong>
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
                            <strong><span role="img" aria-label="rainbow">💩</span>Boost engagement</strong>
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
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body text-center">
                <div>Let's talk a little bit about</div>
                <h1>How to give a great bonus<sup><span style={{ fontSize: "0.5em", fontWeight: 700, zIndex: 1 }}><a href="https://help.bonus.ly/articles/1165561-how-to-give-a-great-bonus">[1]</a></span></sup> at Ricker Lyman Robotic</h1>
                <h2>Giving great bonuses can help build a culture that values effort and performance over appearances.</h2>
                <h3>Giving a great bonus can help make Bonusly even more fun and effective. Here are a few tips to keep in mind when writing bonuses to make sure that they contribute to a positive and healthy culture.</h3>
              </div>
            </div>
            <Case>
              <Caption id="case-1" number="1" name={<span>Beautiful eyes <sup style={{ color: "lightgrey" }}><small><em>mediocre tan</em></small></sup></span>} difficulty="Well, it depends." objectives="Compliment appearance — new haircut, tattoo, bracelet, jeans, etc." />
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
                  { name: "Iryna Shvets", avatarUrl: irynaShvetsAvatar },
                  { name: "George Barvinok", avatarUrl: georgeBarvinokAvatar },
                  { name: "Galyna Makogoniuk", avatarUrl: galynaMakogoniukAvatar },
                  { name: "Orest Hapaliak", avatarUrl: orestHapaliakAvatar },
                  { name: "Vadym Drybas", avatarUrl: vadymDrybasAvatar },
                  { name: "Yurii Ostapchuk", avatarUrl: yuriiOstapchukAvatar },
                  { name: "Bohdan Pelekh", avatarUrl: bohdanPelekhAvatar }
                ]}
              >
                <p>/give +10 @ilya.kotlov & @volodymyr.kondratenko for the deepest and most beautiful eyes I have ever seen #загарніочі.</p>
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