import { Container, Row, Col, Form, FormControl, Card } from "react-bootstrap";
import { useState, ChangeEvent, FormEvent } from "react";

const MainSearch = () => {
  const baseURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  interface MusicState {
    query: string;
    results: [
      data: [
        {
          id: number;
          title: string;
          artist: {
            id: number;
            name: string;
            picture_small: string;
            picture_medium: string;
          };
          album: {
            id: number;
            title: string;
            cover_small: string;
            cover_medium: string;
          };
        }
      ]
    ];
  }

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MusicState[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const fetchMusic = async () => {
    try {
      let response = await fetch(baseURL + query);
      if (response.ok) {
        let results = await response.json();
        setResults(results);
        console.log(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    fetchMusic();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Music search engine</h3>
          <Form onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Enter music, artist, album"
              value={query}
              onChange={handleChange}
            />
          </Form>

        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
