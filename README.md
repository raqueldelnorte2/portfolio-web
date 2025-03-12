configuración inicial de postgreSQL     
     
     
     /usr/lib/systemd/system/postgresql.service              
# but we are using a service since targets cannot be reloaded.
#
# The unit actually managing PostgreSQL clusters is postgresq>
# instantiated as postgresql@15-main.service for individual c>

[Unit]
Description=PostgreSQL RDBMS

[Service]
Type=oneshot
ExecStart=/bin/true
ExecReload=/bin/true
RemainAfterExit=on

[Install]
WantedBy=multi-user.target
