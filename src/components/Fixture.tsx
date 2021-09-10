export const Fixture = (props: any) => {
  const { data } = props;
  console.log(data);
  return (
    <div
      style={{
        width: "50%",
        margin: 10,
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 20,
        }}
      >
        <div
          style={{
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          {false ? <span>Live</span> : null}
          <img
            src={data.league.flag}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <span>{data.league.name}</span>
          <span
            style={{
              backgroundColor: props.isFav ? "black" : "gold",
              padding: 5,
              borderRadius: 20,
            }}
          >
            Fav
          </span>
        </div>
        <div style={{ flexDirection: "row", textAlign: "center" }}>
          <div>
            {true ? (
              <img
                src={data.teams.home.logo}
                style={{
                  width: 100,
                  borderRadius: 100,
                  padding: 5,
                  backgroundColor: "#DFE1E5",
                }}
              />
            ) : null}

            <h1>{data.teams.home.name}</h1>
          </div>
          <div style={{ margin: 20 }}>
            <div>
              <span>{data.goals.home}</span>
              <span>{" : "}</span>
              <span>{data.goals.away}</span>
            </div>
            <div>
              <span>Refree:</span>
              <span>{data.fixture.referee}</span>
            </div>
          </div>
          <div>
            {true ? (
              <img
                src={data.teams.away.logo}
                style={{
                  width: 100,
                  borderRadius: 100,
                  padding: 5,
                  backgroundColor: "#DFE1E5",
                }}
              />
            ) : null}
            <h1>{data.teams.away.name}</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "-5%",
        }}
      >
        <h5
          style={{
            backgroundColor: "#6045E2",
            textAlign: "center",
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
            color: "white",
            padding: 10,
            margin: "auto",
          }}
        >
          Match location pointer
        </h5>
      </div>
    </div>
  );
};
