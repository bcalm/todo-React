package com.todo.config;

import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import static java.util.Collections.singletonList;

@Configuration
@Slf4j
public class SecurityConfig {

    @Bean
    SecurityFilterChain defaultSecurityFilterChain(@NotNull HttpSecurity http) throws Exception {
        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new KeycloakRoleConverter());

        http.cors().configurationSource(request -> {
                CorsConfiguration config = new CorsConfiguration();
                config.setAllowedMethods(singletonList("*"));
                config.setAllowedHeaders(singletonList("*"));
                config.setAllowedOrigins(singletonList("*"));
                config.setMaxAge(3600L);
                return config;
            }).and().authorizeHttpRequests((auth) -> auth
                .antMatchers("/api/getTodo").authenticated()
                .antMatchers("/api/addTask").authenticated()
                .antMatchers("/api/resetTodo").authenticated()
                .antMatchers("/api/updateHeading").authenticated()
                .antMatchers("/api/updateStatus").authenticated()
                .antMatchers("/api/deleteTask").authenticated())
            .csrf().disable()
            .oauth2ResourceServer().jwt().jwtAuthenticationConverter(jwtAuthenticationConverter);
        return http.build();
    }
}
