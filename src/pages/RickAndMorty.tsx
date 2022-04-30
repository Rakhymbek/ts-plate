import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useCharacterActions } from "../hooks/useCharacterActions";
import { CharactersActionType } from "../store/reducers/charactersReducer";
import { useDispatch } from "react-redux";

export function RickAndMorty() {
  const { characters } = useTypedSelector((state) => state.characters);
  const { totalPages } = useTypedSelector((state) => state.characters);
  const { page } = useTypedSelector((state) => state.characters);
  const { query } = useTypedSelector((state) => state.characters);
  const { sort } = useTypedSelector((state) => state.characters);
  const dispatch = useDispatch();

  const { fetchCharacters } = useCharacterActions();

  useEffect(() => {
    fetchCharacters({ query: "", page , sortBy: sort});
  }, [fetchCharacters, sort, page]);

  const setQuery = useCallback(
    (payload: string) => {
      dispatch({ type: CharactersActionType.SET_QUERY, payload });
    },
    [dispatch]
  );

  const setSort = useCallback(
    (payload: string) => {
      dispatch({ type: CharactersActionType.SET_SORT, payload });
    },
    [dispatch]
  );

  const searchCharacters = useCallback(
    ({ page = 1, sortBy = sort } = {}) => {
      fetchCharacters({ page, query, sortBy });
    },
    [fetchCharacters, query, sort]
  );

  console.log(query);
  return (
    <Container style={{ padding: 40 }} maxWidth="xl">
      <Container style={{ maxWidth: 1280 }}>
        <h1
          style={{
            margin: 0,
            marginBottom: 40,
            fontSize: 100,
            fontWeight: 800,
            textAlign: "center",
            color: "rgb(32, 35, 41)",
          }}
        >
          The Rick and Morty
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>Characters</h1>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "baseline",
            }}
            className="search_box"
          >
            {
              <FormControl
                variant="standard"
                fullWidth
                style={{ marginRight: 20, minWidth: 90 }}
              >
                <InputLabel id="demo-simple-select-label">
                  Sort by status
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Sort by status"
                    onChange={(e) => {
                      setSort(e.target.value);
                      searchCharacters({sortBy: e.target.value})
                    }}
                  >
                    <MenuItem value={"alive"}>Alive</MenuItem>
                    <MenuItem value={"dead"}>Dead</MenuItem>
                    <MenuItem value={"unknown"}>unknown</MenuItem>
                  </Select>
              </FormControl>
            }
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={() => searchCharacters()} className="search_btn">
              Search
            </Button>
          </div>
        </div>

        <ul className="characters_list">
          {!characters ? (
            <h1 style={{ fontSize: 80 }}>There is nothing here</h1>
          ) : (
            characters.map((character, index) => (
              <Card
                sx={{
                  display: "flex",
                  maxWidth: 600,
                  height: 220,
                  flexGrow: 1,
                  boxShadow: 3,
                  transition: "0.2s ease-in-out",
                }}
                key={index}
                className="characters_card"
              >
                <CardMedia
                  component="img"
                  sx={{ width: 230 }}
                  image={character.image}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <CardContent
                    className="character_card_content"
                    sx={{
                      flex: "1 0 auto",
                      backgroundColor: "rgb(60, 62, 68)",
                    }}
                  >
                    <Typography component="div" variant="h5">
                      <h2
                        /*  onClick={() => navigate("/RickAndMorty/" + character.id)} */
                        className="character_title"
                      >
                        {character.name}
                      </h2>
                    </Typography>
                    <Typography
                      fontFamily="Segoe UI"
                      color="white"
                      component="div"
                    >
                      <span className="character_status">
                        <span
                          className="status_icon"
                          style={{
                            backgroundColor:
                              character.status === "Alive"
                                ? "rgb(85, 204, 68)"
                                : character.status === "Dead"
                                ? "rgb(214, 61, 46)"
                                : "rgb(158, 158, 158)",
                          }}
                        ></span>
                        {character.status} - {character.species}
                      </span>
                      <Typography
                        fontFamily="Segoe UI"
                        fontWeight={500}
                        color="rgb(158, 158, 158)"
                        component="div"
                        marginTop={2}
                      >
                        <span>Last known location:</span>
                        <h3 className="character_location">
                          {character.location.name}
                        </h3>
                        <div style={{ marginTop: 16 }}>
                          <span>First seen in:</span>
                          <h3 className="character_location">location</h3>
                        </div>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))
          )}
        </ul>
        {!characters ? (
          ""
        ) : (
          <Pagination
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            count={totalPages}
            page={page}
            shape="rounded"
            onChange={(e, page) => fetchCharacters({ page })}
          />
        )}
      </Container>
    </Container>
  );
}
