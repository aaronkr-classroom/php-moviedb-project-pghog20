//사용하고 싶은 db
use('dju-php');

//컬렉션에서 문서를 추가하기
db.getCollection('moviedb').insertMany([
    {'id' : 1, 'title' : '타이타닉', 'genre' : '로멘스', 'date' : new Date('2016-09-09'), 'price' : 10000, 'photo' : "./img/titanic.jpg"},
    {'id' : 2, 'title' : '쿵푸팬더', 'genre' : '판타지', 'date' : new Date('2017-10-15'), 'price' : 9000, 'photo' : "./img/congpupanda.jpg"},
    {'id' : 3, 'title' : '매트릭스', 'genre' : 'SF', 'date' : new Date('2018-09-09'), 'price' : 7000, 'photo' : "./img/matrics     .jpg"},
])