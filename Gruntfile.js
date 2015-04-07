module.exports = function(grunt) {
	grunt.initConfig({
		aws: grunt.file.readJSON('.aws.json'),
		
		s3: {
			options: {
				accessKeyId: "<%= aws.accessKeyId %>",
				secretAccessKey: "<%= aws.secretAccessKey %>",
				bucket: "myles.coffee"
			},
			build: {
				cwd: "build",
				src: "**"
			}
		},
		rsync: {
			options: {
				args: ["--verbose"],
				recursive: true
			},
			prod: {
				options: {
					src: "./build/",
					dest: "/srv/www/coffee_myles_www/html",
					host: "myles@panda.mylesbraithwaite.com",
					port: "2222",
					delete: true,
				}
			}
		},
		exec: {
			encrypt: {
				cmd: "gpg --encrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json.gpg .aws.json"
			},
			decrypt: {
				cmd: "gpg --decrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json .aws.json.gpg"
			}
		},
		middleman: {
			options: {
				useBundle: true
			},
			server: {
				options: {
					command: "server",
					environment: 'development'
				}
			},
			build: {
				options: {
					command: "build",
					environment: 'production'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-aws');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-middleman');
	
	grunt.registerTask('default', ['middleman:build']);
	grunt.registerTask('run', ['middleman:server']);
	grunt.registerTask('deploy', ['default', 's3']);
};