module.exports = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'mysql',
  autoLoadEntities: true,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/migration/**/*.migration.js'],
  cli: {
    entitiesDir: '../entities',
    migrationsDir: '../migrations',
  },
};
