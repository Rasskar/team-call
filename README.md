cp .env.example .env
chmod 755 ./sail
./sail up -d
sudo chown -R $USER:$USER vendor/ - замените $USER на вашего пользователя
./sail composer install
./sail artisan key:generate
./sail npm i
./sail down -v
./sail up -d
./sail artisan migrate
