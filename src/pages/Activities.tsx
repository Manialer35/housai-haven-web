import React from 'react';
import ClickableImage from '@/components/ClickableImage';
import { Calendar, Clock, Users, Heart, Music, Palette, Dumbbell, BookOpen } from 'lucide-react';
import activities1 from '@/assets/activities1.jpg';
import activities2 from '@/assets/activities2.jpg';
import activities3 from '@/assets/activities3.jpg';
import activities4 from '@/assets/activities4.jpg';
import activities5 from '@/assets/activities5.jpg';
import activities6 from '@/assets/activities6.jpg';
import activities7 from '@/assets/activities7.jpg';
import activities8 from '@/assets/activities8.jpg';
import activities9 from '@/assets/activities9.jpg';
import activities10 from '@/assets/activities10.jpg';

const Activities = () => {
  // const dailySchedule = [
  //   { time: '6:00 AM', activity: 'Morning Prayer & Meditation', icon: Heart },
  //   { time: '7:00 AM', activity: 'Light Exercise & Yoga', icon: Dumbbell },
  //   { time: '8:30 AM', activity: 'Breakfast', icon: Users },
  //   { time: '10:00 AM', activity: 'Social Activities & Games', icon: Users },
  //   { time: '12:30 PM', activity: 'Lunch', icon: Users },
  //   { time: '2:00 PM', activity: 'Rest Time', icon: Clock },
  //   { time: '4:00 PM', activity: 'Tea Time & Conversations', icon: Users },
  //   { time: '5:00 PM', activity: 'Evening Activities', icon: Music },
  //   { time: '7:30 PM', activity: 'Dinner', icon: Users },
  //   { time: '9:00 PM', activity: 'Rest & Sleep', icon: Clock }
  // ];

  // const weeklyActivities = [
  //   {
  //     day: 'Monday',
  //     activities: ['Music Therapy', 'Indoor Games', 'Story Telling']
  //   },
  //   {
  //     day: 'Tuesday', 
  //     activities: ['Arts & Crafts', 'Gardening', 'Movie Time']
  //   },
  //   {
  //     day: 'Wednesday',
  //     activities: ['Physiotherapy', 'Cultural Programs', 'Book Reading']
  //   },
  //   {
  //     day: 'Thursday',
  //     activities: ['Cooking Together', 'Card Games', 'Spiritual Discourse']
  //   },
  //   {
  //     day: 'Friday',
  //     activities: ['Dance Therapy', 'Nature Walks', 'Group Discussions']
  //   },
  //   {
  //     day: 'Saturday',
  //     activities: ['Special Celebrations', 'Family Visits', 'Entertainment']
  //   },
  //   {
  //     day: 'Sunday',
  //     activities: ['Community Prayer', 'Rest & Relaxation', 'Special Meals']
  //   }
  // ];

  const celebrations = [
    'Birthday Celebrations',
    'Festival Celebrations (Diwali, Holi, etc.)',
    'Cultural Events',
    'National Holidays',
    'Seasonal Festivals',
    'Community Gatherings'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Elderly Care Activities & Wellness Programs
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Discover comprehensive elderly wellness programs at India's premier free old age home. 
            Our expert-designed activities include yoga therapy, physiotherapy, recreational therapy, 
            music therapy, and cognitive stimulation programs specifically created for senior citizens 
            to maintain physical health, mental agility, and emotional well-being.
          </p>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Daily Schedule</h2>
            <p className="text-lg text-muted-foreground">
              A well-structured day filled with care, activities, and rest
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailySchedule.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-gentle hover:shadow-card transition-smooth fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-deep">{item.time}</div>
                    <div className="text-muted-foreground">{item.activity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Gallery */}
      <section className="py-20 bg-gradient-to-r from-blue-subtle/50 to-accent-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Activity Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Moments of joy, connection, and fulfillment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-card fade-in">
              <ClickableImage 
                src={activities1} 
                alt="Elderly nutritional meal program at Housai Old Age Home Mumbai - Free balanced diet for senior citizens"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Dietitian-designed nutritious meals shared in a warm, family-like atmosphere. Our specialized 
                  geriatric nutrition program includes diabetic-friendly options, heart-healthy meals, and 
                  therapeutic diets for elderly residents with specific health conditions.
                </p> */}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities2} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities3} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities4} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities5} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities6} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities7} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities8} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card slide-up">
              <ClickableImage 
                src={activities9} 
                alt="Senior fitness and physiotherapy programs at free old age home Mumbai - Elderly exercise therapy"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Professional physiotherapy sessions, gentle yoga for seniors, chair exercises, and mobility 
                  training conducted by certified geriatric fitness specialists. Programs designed to improve 
                  balance, reduce fall risk, and maintain joint flexibility for elderly residents.
                </p> */}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-card fade-in">
              <ClickableImage 
                src={activities10} 
                alt="Art therapy and creative activities for elderly at Mumbai old age home - Senior mental wellness programs"
                className="w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-3"></h3>
{/*                 <p className="text-muted-foreground">
                  Structured art therapy, creative writing workshops, memory games, and cognitive exercises 
                  designed to prevent dementia and enhance mental acuity. Our occupational therapists conduct 
                  specialized programs to maintain cognitive function in elderly residents.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Activities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Weekly Activity Calendar</h2>
            <p className="text-lg text-muted-foreground">
              Special programs and activities throughout the week
            </p>
          </div>
          
          <div className="grid lg:grid-cols-7 md:grid-cols-2 gap-4">
            {weeklyActivities.map((day, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-gentle hover:shadow-card transition-smooth slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-deep">{day.day}</h3>
                </div>
                <ul className="space-y-2">
                  {day.activities.map((activity, actIndex) => (
                    <li 
                      key={actIndex}
                      className="text-sm text-muted-foreground bg-blue-subtle rounded-lg px-3 py-2"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Celebrations */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Celebrations & Events
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Making every moment special with festivals, birthdays, and community gatherings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrations.map((celebration, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-smooth fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{celebration}</h3>
                <p className="text-white/80 text-sm">
                  Joyful celebrations that bring the community together in happiness and harmony.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Benefits */}
      <section className="py-20 bg-gradient-to-r from-accent-warm/40 to-accent-gentle/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
            <div className="text-center mb-8">
              <h2 className="heading-secondary mb-4">Benefits of Our Activity Programs</h2>
              <p className="text-lg text-muted-foreground">
                Designed for physical, mental, and emotional well-being
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Dumbbell,
                  title: 'Physical Health',
                  description: 'Maintains mobility, strength, and overall physical wellness'
                },
                {
                  icon: BookOpen,
                  title: 'Mental Stimulation',
                  description: 'Keeps the mind sharp and engaged through various activities'
                },
                {
                  icon: Users,
                  title: 'Social Connection',
                  description: 'Builds friendships and reduces feelings of loneliness'
                },
                {
                  icon: Heart,
                  title: 'Emotional Well-being',
                  description: 'Promotes happiness, purpose, and emotional balance'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-deep mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
