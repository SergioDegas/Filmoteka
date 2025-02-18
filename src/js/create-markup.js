const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';

export function createMarkup(array) {
  return array
    .map(
      ({ poster_path, title, genre_ids, release_date }) =>
        `<li class="grid__item film-card">
        <a href="#" class="list">
          <div class="film-card__thumb">
            <img
              class="film-card__img"
              src="${BASE_IMG_URL}${poster_path}"
              alt="Movie poster"
              loading="lazy"
            />
          </div>
          <h2 class="film-card__header">${title}</h2>
        </a>
        <p class="film-card__genres">${genre_ids}</p>
        <span class="film-card__year">${release_date}</span>
      </li>`
    )
    .join('');
}

/* 
Шаблон розмітки картки фільму на cторінці бібліотеки

      <li class="grid__item film-card">
        <a href="#" class="list">
          <div class="film-card__thumb">
            <img
              class="film-card__img"
              src="/src/images/example.jpg"
              alt="Movie poster"
              loading="lazy"
            />
          </div>
          <h2 class="film-card__header">ONCE UPON A TIME... IN HOLLYWOOD</h2>
        </a>
        <p class="film-card__genres">Drama, Comedy</p>
        <span class="film-card__year">2019</span>
        <span class="film-card__rating">8.0</span>
      </li>
*/
