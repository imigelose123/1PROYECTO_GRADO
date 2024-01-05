const int LED_BUILTIN = 25;

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  while (Serial.available() > 0) {
    int on = Serial.parseInt();

    if (on == 1) {
      digitalWrite(LED_BUILTIN, HIGH);
    }
    
    if (on == 2) {
      digitalWrite(LED_BUILTIN, LOW);
    }
  }
}
