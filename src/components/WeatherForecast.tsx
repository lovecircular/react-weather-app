function getDate(date: Date): { readable: string; dateTime: string } {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };

  let readable = date.toLocaleDateString(undefined, dateOptions);
  let dateTime = date.toISOString().split("T")[0];

  return { readable, dateTime };
}

function getTime(date: Date): { readable: string; dateTime: string } {
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    dayPeriod: "short",
  };

  let readable = date.toLocaleTimeString(undefined, timeOptions);
  let dateTime = date.getHours() + ":" + date.getMinutes();

  return { readable, dateTime };
}

export type WeatherInfo = {
  humidity: number;
  location: string;
  pressure: number;
  sunset: number;
  temperature: number;
  weatherIcon: string;
  weatherType: string;
  windSpeed: number;
};

export default function WeatherForecast({
  humidity,
  location,
  pressure,
  sunset,
  temperature,
  weatherIcon,
  weatherType,
  windSpeed,
}: WeatherInfo) {
  return (
    <article className="forecast">
      <div className="main">
        <div className="info">
          <p className="location">{location}</p>
          <time dateTime={getDate(new Date()).dateTime} className="date">
            {getDate(new Date()).readable}
          </time>
          <p className="conditions">{weatherType}</p>
        </div>
        <div className="temperature">
          <img
            src={require(`../assets/openweathericons/${weatherIcon}.svg`)}
            alt=""
          />
          <p>{Math.round(temperature)}°</p>
        </div>
      </div>
      <dl>
        <div className="additional-info">
          <dt>Sunset</dt>
          <dd>
            <time dateTime={getTime(new Date(sunset)).dateTime}>
              {getTime(new Date(sunset)).readable}
            </time>
          </dd>
        </div>

        <div className="additional-info">
          <dt>Humidity</dt>
          <dd>{humidity}%</dd>
        </div>
        <div className="additional-info">
          <dt>Pressure</dt>
          <dd>{pressure}</dd>
        </div>
        <div className="additional-info">
          <dt>Wind speed</dt>
          <dd>{windSpeed}km/h</dd>
        </div>
      </dl>
    </article>
  );
}
