from pynput.mouse import Button, Controller
import time

mouse = Controller()

# Read pointer position
print('The current pointer position is {0}'.format(
    mouse.position))

# Set pointer position
mouse.position = (10, 1200)
print('Now we have moved it to {0}'.format(
    mouse.position))

# Move pointer relative to current position
mouse.move(1005, -5)

# # Press and release
# mouse.press(Button.left)
# mouse.release(Button.left)

# Double click; this is different from pressing and releasing
# twice on Mac OSX
mouse.click(Button.left, 2)

# Scroll two steps down
for i in range(0, 50000):
    time.sleep(0.5)
    print(i)
    mouse.scroll(0, i*-0.1)
