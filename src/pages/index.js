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
                <h4>Bonus.ly offers to:</h4>
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
                <div>Their website says many companies are happy using it, that’s a good thing.<br />
                  On the other hand, here at RLR we already have a pretty cool, engaged and coordinated team, is there any <strong>actual fun</strong> in integrating something like that?
                </div>
              </div>
            </div>
            <div className="hero hero-lg">
              <div className="hero-body text-center">
                <h1>It could be tweaked.</h1>
              </div>
              <div>Suppose every month you would get paid not only with salary, but with a portion of mana.</div>
              <div>🧙‍️ 💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨💧✨</div>  
              <FacebookMessage>
              <div>Normally, <strong>mana</strong> is used to cast spells. 
              <br />This specific one to spell <strong>thanks and thumbs-up</strong>. Yep, that’s all you can do with it: send out.</div>
              </FacebookMessage>
              <div>When you bind your raw <strong>mana</strong> with gratitude or inspiration or lolz and send in the direction of another person, they receive it as a bound mana.</div>
              <div className="hero hero-lg">
                <div className="hero-body text-center"></div>
                  <h4>And here's what happened:</h4>
                  <ul>
                    <li>You have expressed yourself 🎉</li>
                    <li>You have encouraged your peer 🤜🤛</li>
                    <li>That lucky dude not only feels instantly better but can also use this bound <strong>mana</strong> <br />to get gear, loot and power-ups of his choice!🧰</li>
                  </ul>
                </div>
              </div>  
              <div className="hero hero-lg">
                <div className="hero-body text-center">
                  <h1>What kind of stuff can one get?<br />🥎🌶️⏱️🧦🙏🧯🧻💣</h1>
                </div>
              </div>
                      
            <div className="hero hero-lg">
              <div className="hero-body text-center">
                <h1>OK. How do I do that?</h1>
              </div>  
            </div>
                <ul>
                  <li><strong>Bonus.ly platform</strong> is where you can see your <strong>mana</strong> points in your user profile, available rewards and their cost in points.</li>
                  <li>Public channel called <a href="https://rickerlyman.slack.com/messages/CK7MBDXHU/"><strong>#bonusly</strong></a> is a Trading Exchange Market, Post Office and somewhat a flood chat</li>
                  <li>Whenever you have an inspiration to throw some recognition at one of your RLR peers, just go to bonus.ly interface OR that channel and <strong>compose a spell</strong>:</li>
                </ul>
              <SlackMessage
                senderId="julia-titova"
                senderName="Julia Titova"
                senderAvatarUrl={juliaTitovaAvatar}
                reactions={[
                  { emoji: "💪", count: 4 },
                  { emoji: "🥇", count: 1 },
                  { emoji: "😤", count: 5 },
                  { emoji: "🐲", count: 2 }
                ]}
                
              >
                <p><strong>/give +5 @that_awesome_fella</strong> for <strong>tending extra time to our unit tests</strong> when we needed them the most. Here goes hashtag <strong>#staying-up-late</strong>.
</p>
              </SlackMessage>
              


            <div className="hero hero-lg">
              <div className="hero-body text-center">
                
                <h1>Reasons to spend <strong>mana</strong> may vary:</h1>
              </div>
              {/*
              <Case>
              <Caption id="case-1" number="1" name={<span>Beautiful eyes <sup style={{ color: "lightgrey" }}><small><em>mediocre tan</em></small></sup></span>} difficulty="Well, it depends." objectives="Compliment appearance — new haircut, tattoo, bracelet, jeans, etc." />
              */}
              <SlackMessage
                senderId="iryna-shvets"
                senderName="Iryna Shvets"
                senderAvatarUrl={irynaShvetsAvatar}
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
              >
                <div><strong>+3</strong> <span className="bg-secondary">@v.magora</span> for a fascinating new beard style <span className="text-primary"><strong>#breaking-news-this-just-in</strong></span> <span className="text-primary"><strong>#за-гарні-очі</strong></span> <span className="text-primary"><strong>#lacoste</strong></span></div>
              </SlackMessage>
            {/*</Case>

            <Case>
              
              <Caption id="case-1" number="1" name={<span>Beautiful eyes <sup style={{ color: "lightgrey" }}><small><em>mediocre tan</em></small></sup></span>} difficulty="Well, it depends." objectives="Compliment appearance — new haircut, tattoo, bracelet, jeans, etc." />
              */}
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
             {/*</Case>*/}

            {/*<Case>
              
              <Caption id="case-1" number="1" name={<span>Beautiful eyes <sup style={{ color: "lightgrey" }}><small><em>mediocre tan</em></small></sup></span>} difficulty="Well, it depends." objectives="Compliment appearance — new haircut, tattoo, bracelet, jeans, etc." />
              */}
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
             {/*</Case>*/}
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
                      Opens box once a month and grants 3 random yous +10 <strong>mana</strong> points each
                    </div>
                  </div>
                  <div className="column col-6">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h4>Clark Kent's lottery</h4><img src="https://dumielauxepices.net/sites/default/files/superman-logo-clipart-transparent-785959-3553308.gif" height="100px"></img>
                        </div>  
                      </div>
                      qwe                      
                    </div>
                  </div>
                  <div className="column col-6">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                        <h4>Sweepstake bets</h4><img src="http://www.spectacletheater.com/wp-content/uploads/stable/orbit.gif" height="70px"></img>
                        </div>  
                      </div>
                      qwe                      
                    </div>
                  </div>
                  <div className="column col-6">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                        <h4>Happy Working Anniversary</h4><img src="https://cdn.dribbble.com/users/48951/screenshots/1886884/cake_animation.gif" height="70px"></img>
                        </div>  
                      </div>
                      qwe                      
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
