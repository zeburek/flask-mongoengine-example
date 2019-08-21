# Установка и запуск

Для запуска в Docker контейнере необходимо выполнить 
следующие действия:

```bash
docker-compose up
```

После чего микросервис будет доступен по адресу 
http://localhost:4000

Стоит учитывать, что если вы хотите сделать сервис доступным по другому URL - 
необходимо в переменные окружения для приложения добавить адрес:
```yaml
  app:
    environment:
      BACKEND_HOST: http://192.168.1.102:4000
```

# Описание API-сервиса

- **POST** `/api/subscribe` - подписка на уведомления. 
	Принимает данные в формате:
	```json
	{
		"email": "...",
		"name": "...",
		"time": "...",
		"comment": "..."	
	}
	```
- **GET** `/api/subscribers` - получение списка подписавшихся. 
	Отдает данные в формате:
	```json
	[
		{
			"email": "...",
			"name": "...",
			"comment": "...",
			"created_at": "...",
			"expired_at": "..."
		},
		...
	]
	```
- **DELETE** `/api/subscribers` - очистка списка подписавшихся.
