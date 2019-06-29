import React from "react";
import { SEO, Header, Footer, VideoWrapper, SlackMessage, FacebookMessage, CannotEatThankYouWithBread, SlackMessageInput } from "../components";
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
  yuriiOstapchukAvatar,
  bonuslyAvatar
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
            <div className="hero hero-lg">
              <div className="hero-body">
                <div className="text-center">
                  <h1 className="main-title">
                    <span className="what-if">А что если бы</span>
                    <span className="thank-you">спасибо</span>
                    <span className="could-be-eaten-with-bread">можно было намазать на хлеб?<sup className="text-gray"><strong>*</strong></sup></span>
                  </h1>
                  <div style={{ marginTop: "7em" }} className="avatars-wrapper">
                    <div className="avatar-wrapper tooltip" data-tooltip="Julia Titova">
                      <object class="avatar-object" data={juliaTitovaRoundedAvatar} role="img" aria-label="Julia Titova"></object>
                    </div>
                    <div class="avatar-wrapper tooltip" data-tooltip="Dasha Korotkykh">
                      <object class="avatar-object" data={dashaKorotkykhRoundedAvatar} role="img" aria-label="Dasha Korotkykh"></object>
                    </div>
                  </div>
                  <div style={{ marginTop: "1em" }}><strong>July 1<sup>st</sup></strong>, 2019</div>
                </div>
              </div>
            </div>
            {/*
            <h5 className="text-gray"><sup><strong style={{ fontSize: "1.5em", lineHeight: 0.5 }}>*</strong></sup>Russian saying <strong><CannotEatThankYouWithBread /></strong> means <strong>"You cannot eat "thank you" with bread"</strong> or <strong>"Can't put thanks in your pocket (or in the bank)"</strong>. So... <em>what if you could?</em></h5>
            */}
            <div className="hero hero-lg">
              <div className="hero-body">
                <h1 className="text-center">You're <strong>awesome and incredible</strong>!</h1>
                <VideoWrapper title="You're breathtaking!">
                  <iframe src="//coub.com/embed/1vv2dd?muted=false&autostart=false&originalSize=true&startWithHD=true" allowFullScreen frameborder="0" width="1280" height="720" allow="autoplay"></iframe>
                </VideoWrapper>
                <FacebookMessage>
                  <strong>— Hey</strong>, <span style={{ fontWeight: 600 }}>привіт</span>, привет <span className="waving-hand">👋</span>!<br />The reason to gather all of you here is to let you know that you're <strong>awesome and incredible</strong> and we just really want you to not only know it but <strong>truly feel it</strong> as well. Basically, that’s it <em>(yes, you can leave)</em>, but then wouldn’t it be nice to somehow keep telling it (and cheering each other up) beyond once-in-some-time gathering?
                </FacebookMessage>
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body">
                <h1 className="text-center">Welcome to <strong style={{ color: "#33CC66" }}>Bonusly</strong>!</h1>
                <FacebookMessage background="grey">
                  — We gave it a thought and sought the aid of <a href="https://bonus.ly/"><strong>Bonusly</strong></a>, a platform designed and used to exchange gratitude with virtual currency, which at any point could be exchanged for perks of one’s choice. Bonusly offers to:
                  <div className="columns about-bonusly my-2">
                    <div className="column col-4">
                      <div class="panel">
                        <div class="panel-header">
                          <div className="panel-title">
                            <h6>
                              <strong>Promote your mis-s-s-s-sion!</strong>
                              <span className="text-gray"><small>#1</small></span>
                            </h6>
                          </div>
                        </div>
                        <div class="panel-body">
                          <span style={{
                            fontSize: "3em",
                            float: "right",
                            lineHeight: "1.25em"
                          }}>😤</span>
                          Make recognition more impactful by connecting it to your company’s core values and giving visibility to everyone’s contributions.
                        </div>
                      </div>
                    </div>
                    <div className="column col-4">
                      <div class="panel">
                        <div class="panel-header">
                          <div className="panel-title">
                            <h6>
                              <strong>Build stronger t-t-t-t-teams!</strong>
                              <span className="text-gray"><small>#2</small></span>
                            </h6>
                          </div>
                        </div>
                        <div class="panel-body">
                          <span style={{
                            fontSize: "3em",
                            float: "right",
                            lineHeight: "1.25em"
                          }}>💩</span>
                          Build a scalable culture of recognition by empowering everyone to recognize their peers, direct reports, and managers.
                        </div>
                      </div>
                    </div>
                    <div className="column col-4">
                      <div class="panel">
                        <div class="panel-header">
                          <div className="panel-title">
                            <h6>
                              <strong>Boost enga-a-a-a-agement!</strong>
                              <span className="text-gray"><small>#3</small></span>
                            </h6>
                          </div>
                        </div>
                        <div class="panel-body">
                          <span style={{
                            fontSize: "3em",
                            float: "right",
                            lineHeight: "1.25em"
                          }}>🚣‍</span>
                          Encourage frequent and timely recognition by integrating with the communication tools your employees use every day.                        
                        </div>
                      </div>
                    </div>
                  </div>
                  Their website says many companies are happy using it, so that’s a good thing. On the other hand, here at Ricker Lyman Robotic we already have a pretty cool, engaged and coordinated team, is there any <em>actual fun</em> in integrating something like that?
                </FacebookMessage>
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body">
                <h1 className="text-center">Why yes, it can be <strong>tweaked</strong>!</h1>
                <FacebookMessage>
                  — Suppose that every month you would get paid not only with a salary, but also with a portion of <strong>mana</strong>. Normally, <strong>mana</strong> is used to cast spells. This specific one is used to spell <strong>🙏thanks</strong> and <strong>👍thumbs-up</strong>. Yep, that’s all you can do with it — send out. When you bind your <em>raw</em> mana with gratitude or inspiration or lolz and send in the direction of another person, they receive it as a <em>bound</em> mana. And here's what's going to happen:
                  <ol className="compact inverted">
                    <li>You'll express yourself 🎉</li>
                    <li>You'll encourage your peer 🤜🤛</li>
                    <li>That lucky guy or gal not only instantly feels better, but can also use this bound <strong>mana</strong> to get gear, loot, and power-ups of his choice! 🧰</li>
                  </ol>
                </FacebookMessage>
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body text-center">
                <h1>What kind of <strong>stuff</strong> can one get?<br />🥎🌶️⏱️🧦🙏🧯🧻💣</h1>
              </div>
            </div>      
            <div className="hero hero-lg">
              <div className="hero-body">
                <h1 className="text-center">How to <strong>send mana</strong>?</h1>
                <div>
                  <h3><strong>#bonusly</strong></h3>
                  <p>You created this channel on July 1st. This is the very beginning of the <strong>#bonusly</strong> channel. Purpose: Well, obviously, this is a Bonusly channel</p>
                </div>
                <SlackMessage
                  senderId="dasha-korotkykh"
                  senderName="Dasha Korotkykh"
                  senderAvatarUrl={dashaKorotkykhAvatar}
                  reactions={[
                    { emoji: "🎉", count: 7 },
                    { emoji: "🤗", count: 6 },
                    { emoji: "😍", count: 1 },
                    { emoji: "🍪", count: 12 },
                    { emoji: "😛", count: 2 },
                    { emoji: "🥠", count: 5 }
                  ]}
                  replies={[
                    { name: "Vadym Drybas", avatarUrl: vadymDrybasAvatar },
                    { name: "Vasyl Magora", avatarUrl: vasylMagoraAvatar },
                    { name: "Ilya Kotlov", avatarUrl: ilyaKotlovAvatar },
                    { name: "Orest Hapaliak", avatarUrl: orestHapaliakAvatar },
                    { name: "Yurii Ostapchuk", avatarUrl: yuriiOstapchukAvatar },
                    { name: "Bohdan Pelekh", avatarUrl: bohdanPelekhAvatar }
                  ]}
                >
                  <div>But hey! There's also a public channel in Slack called <a href="https://rickerlyman.slack.com/messages/CK7MBDXHU/"><strong>#bonusly</strong></a> that is simultaneosly a Trading Exchange Market, a Post Office, and somewhat a flood chat! So whenever you're in a mood to throw some recognition at one of your Ricker Lyman Robotic peers, just use <strong><code>/give</code></strong> command and a familiar <strong><em><code>&lt;amount&gt; &lt;recepient&gt; &lt;reason&gt; &lt;hashtag&gt;</code></em></strong> syntax to <strong>🧙‍️compose a spell</strong> and Bonusly Slack integration app will take it from there.</div>
                </SlackMessage>
                <SlackMessage
                  senderId="bonusly"
                  senderName="Bonusly"
                  senderAvatarUrl={bonuslyAvatar}
                  reactions={[
                    { emoji: "🤭", count: 4 },
                    { emoji: "🎅", count: 2 },
                    { emoji: "🔥", count: 11 },
                    { emoji: "😛", count: 1 }
                  ]}
                  replies={[
                    { name: "Iryna Shvets", avatarUrl: irynaShvetsAvatar },
                    { name: "Igor Gerasimow", avatarUrl: igorGerasimowAvatar },
                    { name: "Galyna Makogoniuk", avatarUrl: galynaMakogoniukAvatar },
                    { name: "Orest Hapaliak", avatarUrl: orestHapaliakAvatar },
                    { name: "Volodymyr Tysjak", avatarUrl: volodymyrTysjakAvatar },
                    { name: "Yurii Ostapchuk", avatarUrl: yuriiOstapchukAvatar },
                  ]}
                  isBonusly
                  isBonuslyBonus
                >
                  <div><strong>Iryna:</strong> <strong>+3</strong> <span className="bg-secondary">@v.magora</span> for a fascinating new beard style <a href="#"><strong>#breaking-news-this-just-in</strong></a> <a href="#"><strong>#за-гарні-очі</strong></a> <a href="#"><strong>#lacoste</strong></a></div>
                </SlackMessage>
                <SlackMessage
                  senderId="paul-lyman"
                  senderName="Paul Lyman"
                  senderAvatarUrl={paulLymanAvatar}
                  reactions={[
                    { emoji: "😊", count: 1 },
                    { emoji: "🤖", count: 5 },
                    { emoji: "🐦", count: 1 },
                    { emoji: "👀", count: 3 },
                  ]}
                  replies={[
                    { name: "Kostya Lukyanenko", avatarUrl: kostyaLukyanenkoAvatar },
                    { name: "George Barvinok", avatarUrl: georgeBarvinokAvatar },
                    { name: "Volodymyr Kondratenko", avatarUrl: volodymyrKondratenkoAvatar },
                  ]}
                >
                  <div><strong>+10</strong> <span className="bg-secondary">@a.sirak</span> for sharing handy articles on <span className="text-primary"><strong>#rlr-general-ua</strong></span>. Sharing is caring! 😁 <span className="text-primary"><strong>#thanks</strong></span></div>
                </SlackMessage>
                <SlackMessage
                  senderId="bonusly"
                  senderName="Bonusly"
                  senderAvatarUrl={bonuslyAvatar}
                  reactions={[
                    { emoji: "🤭", count: 4 },
                    { emoji: "🎅", count: 2 },
                    { emoji: "🔥", count: 11 },
                    { emoji: "😛", count: 1 }
                  ]}
                  replies={[
                    { name: "Julia Titova", avatarUrl: juliaTitovaAvatar },
                    { name: "Andrii Sirak", avatarUrl: andriiSirakAvatar },
                    { name: "Bogdan Shamanovskyi", avatarUrl: bogdanShamanovskyiAvatar },
                    { name: "Kostiantyn Kravtsov", avatarUrl: kostiantynKravtsovAvatar },
                    { name: "Alec Marin", avatarUrl: alecMarinAvatar }
                  ]}
                  isBonusly
                >
                  <div><strong>Bohdan commented on <a href="#"><strong>Vasyl's bonus</strong></a>:</strong> <strong>+5</strong> indeed, that is reasonable, give credit where credit is due</div>
                </SlackMessage>
                <SlackMessage
                  senderId="bohdan-pelekh"
                  senderName="Bohdan Pelekh"
                  senderAvatarUrl={bohdanPelekhAvatar}
                  reactions={[
                    { emoji: "😊", count: 1 },
                    { emoji: "🤗", count: 6 },
                    { emoji: "🎉", count: 7 },
                    { emoji: "🍪", count: 12 },
                    { emoji: "😛", count: 2 },
                    { emoji: "🥠", count: 5 }
                  ]}
                  replies={[
                    { name: "Vasyl Magora", avatarUrl: vasylMagoraAvatar },
                    { name: "Ilya Kotlov", avatarUrl: ilyaKotlovAvatar },
                    { name: "Orest Hapaliak", avatarUrl: orestHapaliakAvatar },
                    { name: "Vadym Drybas", avatarUrl: vadymDrybasAvatar },
                    { name: "Yurii Ostapchuk", avatarUrl: yuriiOstapchukAvatar },
                    { name: "Bohdan Pelekh", avatarUrl: bohdanPelekhAvatar }
                  ]}
                >
                  <div><strong>+45</strong> and a cookie to <span className="bg-secondary">@y.ostapchuk</span>, 'cause that guy you recommended last week is getting hireeeeeed! <span className="text-primary"><strong>#referral #happyhr</strong></span></div>
                </SlackMessage>
                <SlackMessageInput>
                  <strong>/give +5 @that_awesome_fella</strong> for <strong>tending extra time to our unit tests</strong> when we needed them the most. Here goes hashtag <strong>#staying-up-late</strong>.
                </SlackMessageInput>         
              </div>  
            </div>
            <div className="hero hero-lg">
              <div className="hero-body text-center">
                <h1>What else?</h1>
                <div className="columns">
                  <div className="column col-6">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h4>Goddess of luck</h4><br /><img src="https://discordemoji.com/assets/emoji/Chest.gif"></img>
                        </div>
                      </div>
                      <br />
                      <span>Opens box once a month and grants <br/>3 random yous <strong>+10 mana</strong> points each</span>
                      <br />
                    </div>
                  </div>
                  <div className="column col-6">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h4>Clark Kent's lottery</h4><img src="https://dumielauxepices.net/sites/default/files/superman-logo-clipart-transparent-785959-3553308.gif" height="100px"></img>
                        </div>  
                      </div>
                      <span>Weekly event of 1 hour bidding window, <br />after which one random participant steals <strong>jackpot</strong></span>                     
                      <br />
                    </div>
                  </div>
                  <div className="column col-6">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                        <h4>Sweepstake bets</h4><img src="http://www.spectacletheater.com/wp-content/uploads/stable/orbit.gif" height="70px"></img>
                        </div>  
                      </div>
                      <span>Bet <strong>10 mana</strong> on literally anything — send the bid to <br />@clark.kent and add a descriptive message</span>
                      <br />
                    </div>
                  </div>
                  <div className="column col-6">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                        <h4>Happy Working Anniversary</h4><img src="https://cdn.dribbble.com/users/48951/screenshots/1886884/cake_animation.gif" height="70px"></img>
                        </div>  
                      </div>
                      <span>Goddess of retention sends <strong>+50 redeemable mana</strong> <br />every working anniversary you hit</span>                  
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body text-center">
                <h1>Have fun.</h1>
              </div>
            </div>
          </article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Index;
