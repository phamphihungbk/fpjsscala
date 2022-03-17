import { Subject } from 'rxjs';

const news = new Subject();

// observer
const tv1 = news.subscribe( v => console.log(v + 'TV 1'));
const tv2 = news.subscribe( v => console.log(v + 'TV 2'));

// broadcasting
news.next('Breaking news: ');
