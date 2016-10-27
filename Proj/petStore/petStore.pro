#-------------------------------------------------
#
# Project created by QtCreator 2016-10-25T22:41:59
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = petStore
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    pet.cpp \
    results.cpp

HEADERS  += mainwindow.h \
    pet.h \
    results.h

FORMS    += mainwindow.ui \
    results.ui
