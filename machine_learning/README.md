Configuring Env


install pyenv

```
curl https://pyenv.run | bash

```
install python version
```
pyenv install 3.6.10
```

Cria um ambiente

```
pyenv virtualenv 3.6.0 estudos_python
pyenv local estudos_python
pyenv which python
pyenv which pip
jupyter-notebook
``` 

Notas: 

O que é
Perceptron de uma camada
Função de ativação
Ajuste dos pesos

* Perceptron multicamada (feedfowrard)
* Funções de ativação
* Taxa de erro
* Cost function
* Ajuste dos pesos
* Backpropagation
* Gradiente descedente (magnitude e direção) (Quanto ajustar os pesos - mathisfun.com)
	* y = (1/1+e^-x)
	* derivadaParcial = (y) * (1-y)
* Derivada
* Calculo do delta:  (função de ativação > derivada da função -> delta -> gradiente)
	* deltaSaida = (esperado - resultadoEsperado) * derivadaSigmoid

* Learning rate
* Momentum
* maneiras de encontrar a combinação de pesos
	* força bruta
	* simullated anealing
	* algorítimos genéticos




