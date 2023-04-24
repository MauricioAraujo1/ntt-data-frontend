import {
  FlexBox,
  Title,
  TitleLevel,
  Text,
  TextArea,
  Button,
  RatingIndicator,
  Icon
} from '@ui5/webcomponents-react'

import api from '../../services/api'

function Home() {
  async function getMovies() {
    const data = await api.get(
      'http://www.omdbapi.com/?i=tt3896198&apikey=979af377'
    )

    console.log(data)
  }
  getMovies()

  return (
    <>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Title level={TitleLevel.H1} style={{ color: '#fff' }}>
          OMDB MOVIES
        </Title>
      </FlexBox>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Title level={TitleLevel.H2} style={{ color: '#fff' }}>
          Action, Adventure, Comedy
        </Title>
      </FlexBox>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <Text style={{ color: '#fff', width: 800 }}>
          The Guardians struggle to keep together as a team while dealing with
          their personal family issues, notably Star-Lords encounter with his
          father the ambitious celestial being Ego.
        </Text>
      </FlexBox>
      <FlexBox style={{ marginTop: 50, justifyContent: 'center' }}>
        <TextArea style={{ width: 600, marginRight: 60, height: 10 }} />
        <Button
          style={{
            marginRight: 50,
            color: '#fff',
            display: 'inline-block',
            width: 200,
            backgroundColor: '#712113'
          }}
        >
          Search
        </Button>
        <Button
          style={{
            justifyContent: 'flex-end',
            color: '#fff',
            display: 'inline-block',
            width: 200,
            backgroundColor: '#712113'
          }}
        >
          Reset
        </Button>
      </FlexBox>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'initial',
          alignItems: 'center',
          marginLeft: 40,
          marginTop: 100
        }}
      >
        <Title level={TitleLevel.H2} style={{ color: '#fff' }}>
          Guardians of the Galaxy Vol. 2
        </Title>
      </FlexBox>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'initial',
          alignItems: 'center',
          marginLeft: 40,
          marginTop: 20
        }}
      >
        <Text style={{ color: '#fff', width: 900 }}>
          The Guardians struggle to keep together as a team while dealing with
          their personal family issues, notably Star-Lords encounter with his
          father the ambitious celestial being Ego.
        </Text>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
          style={{ marginLeft: 300, width: 200 }}
        />
      </FlexBox>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'initial',
          alignItems: 'center',
          marginLeft: 40,
          marginTop: 5
        }}
      >
        <Title level={TitleLevel.H3} style={{ color: '#fff' }}>
          Actor
        </Title>
        <Title level={TitleLevel.H5} style={{ color: '#fff', marginLeft: 20 }}>
          Chris Pratt, Zoe Saldana, Dave Bautista
        </Title>
      </FlexBox>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'initial',
          alignItems: 'center',
          marginLeft: 40,
          marginTop: 20
        }}
      >
        <RatingIndicator />
      </FlexBox>
      <Button
        style={{
          color: '#fff',
          width: 120,
          display: 'flex',
          justifyContent: 'initial',
          alignItems: 'center',
          marginLeft: 40,
          marginTop: 20,
          backgroundColor: '#712113'
        }}
      >
        Favorite <Icon name="favorite" style={{ color: '#fff' }} />
      </Button>
      <FlexBox
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50
        }}
      >
        <Title level={TitleLevel.H2} style={{ color: '#fff' }}>
          Filme em lançamento, não perca!!
        </Title>
      </FlexBox>
    </>
  )
}

export default Home
